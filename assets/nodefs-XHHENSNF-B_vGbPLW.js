import{X as n,W as d,F as o,J as e,V as u,K as c}from"./index-Dswlsdwq.js";n();var h=class extends d{constructor(r){super(r),this.rootDir=(void 0)(r)}async init(r){if(!this.dataDir)throw new Error("No datadir specified");return(void 0)((void 0)(this.dataDir,"PG_VERSION"))?!1:((void 0)(this.dataDir),await o(this.dataDir,r),!0)}async emscriptenOpts(r){let i={...r,preRun:[t=>{let a=t.FS.filesystems.NODEFS;t.FS.mkdir(e),t.FS.mount(a,{root:this.rootDir},e)}]},{require:s}=await u();return c(i,s),i}};export{h as NodeFS};
