import { cn } from "@/utils/classnames";
import { ComponentProps, forwardRef } from "react";

export const QueryPlayground = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex size-full items-center justify-center", className)}
      {...props}
    >
      <h3 className="text-xl font-bold">Query Playground</h3>
    </div>
  );
});