var fs = require("fs");
let k = fs.readFileSync("input.txt", "utf-8").split("\r\n");
k.shift();
k = k.sort().join("\r\n");
// \r\n = CR + LF → Used as a new line character in Windows
// fetch('sample.txt').then((d)=>Response.json).then(res=>console.log(res))
fs.writeFileSync("result.txt", k);
