import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Results, PGlite } from "@electric-sql/pglite";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  removeIDBItem,
  postgreIDBName,
  zustandIDBStorage,
  postgreIDBConnection,
} from "./utils/idb";
import { getDatabaseSchema } from "./services/postgre";
import { Cell, DataGridValue } from "./components/ui/data-viewer";
import { postgresTransformer } from "./utils/postgres";

interface Connection {
  name: string;
  postgres: PGlite;
}

export interface QueryResult {
  affectedRows: number;
  totalRecords?: number;
}

export interface QueryHistory {
  error?: string;
  statement: string;
  createdAt?: string;
  executionTime?: number; // ms
  results?: QueryResult[];
}

export type TableType = "BASE TABLE" | "VIEW";

export type TableColumn = {
  type: string;
  column: string;
  nullable: boolean;
  length: string | null;
};

export interface DatabaseSchema {
  schema: string;
  tables: {
    table: string;
    type: TableType;
    columns: TableColumn[];
  }[];
}

export interface Database {
  name: string;

  createdAt?: string;

  description?: string;

  history: QueryHistory[];

  schema: DatabaseSchema[];

  query?: string;

  datagrid?: DataGridValue<Cell>[];
}

interface State {
  active: Connection | undefined;

  databases: Record<string, Database>;

  create: (data: Pick<Database, "name" | "description">) => Promise<void>;

  update: (name: string, data: Pick<Database, "description">) => Promise<void>;

  remove: (name: string) => Promise<void>;

  connect: (name: string) => Promise<void>;

  execute: (query: string) => Promise<Results[] | undefined>;

  reload: () => Promise<void>;
}

export const useDBStore = create<State>()(
  persist(
    immer((set, get) => ({
      active: undefined,

      databases: {},

      create: async (data) => {
        if (get().databases[data.name])
          throw new Error(`db with name: ${data.name} already exists`);

        const postgres = new PGlite(postgreIDBConnection(data.name));

        const schema = await getDatabaseSchema(postgres);

        return set((state) => {
          state.active = {
            name: data.name,
            postgres: postgres,
          };

          state.databases[data.name] = {
            name: data.name,
            description: data.description,
            createdAt: new Date().toLocaleString(),
            history: [],
            schema: schema,
          };
        });
      },

      update: async (name, data) =>
        set((state) => {
          state.databases[name].description = data.description;

          state.databases[name].createdAt = new Date().toLocaleString();
        }),

      remove: async (name) => {
        set((state) => {
          state.active = undefined;

          delete state.databases[name];
        });

        removeIDBItem(postgreIDBName(name));
      },

      connect: async (name) => {
        const postgres = new PGlite(postgreIDBConnection(name));

        const schema = await getDatabaseSchema(postgres);

        return set((state) => {
          state.active = {
            name: name,
            postgres: postgres,
          };

          state.databases[name].schema = schema;
        });
      },

      execute: async (query) => {
        const connection = get().active!;

        const startTime = performance.now();
        const createdAt = new Date().toLocaleString();

        try {
          if (!query || !query.trim()) throw new Error(`no query to run`);

          const result = await connection.postgres.exec(query);

          set((state) => {
            state.databases[connection.name].query = query;

            state.databases[connection.name].datagrid =
              postgresTransformer(result);

            state.databases[connection.name].history.push({
              statement: query,
              createdAt: createdAt,
              executionTime: performance.now() - startTime,
              results: result.map((r) => ({
                affectedRows: r.affectedRows || 0,
                totalRecords: r.rows.length || 0,
              })),
            });
          });

          return result;
        } catch (error) {
          set((state) => {
            state.databases[connection.name].query = query;

            state.databases[connection.name].datagrid = [];

            state.databases[connection.name].history.push({
              statement: query,
              createdAt: createdAt,
              error: (error as Error).message,
              executionTime: performance.now() - startTime,
            });
          });

          throw error;
        }
      },

      reload: async () => {
        const connection = get().active!;

        const schema = await getDatabaseSchema(connection.postgres);

        set((state) => {
          state.databases[connection.name].schema = schema;
        });
      },
    })),
    {
      name: "zustand-store",
      storage: createJSONStorage(() => zustandIDBStorage),
      partialize: (state) => ({ databases: state.databases }),
    }
  )
);