import defaultExport from "./modules/coin.mjs";
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

var numFlips = argv["number"]  || 1

var arrFlips = defaultExport.coinFlips(numFlips)
var result = defaultExport.countFlips(arrFlips)
console.log(arrFlips)
console.log(result)
