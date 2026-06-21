const fs = require("fs");
const path = require("path");
const os = require("os");

console.log(process.versions.node);
console.log(process.versions.v8);
console.log(process.versions.uv);
console.log(process.platform);
//console.log(os.cpus().length);

console.log(typeof global); //-> object
console.log(typeof globalThis); //-> object
