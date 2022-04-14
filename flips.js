import defaultExport from "./modules/coin.mjs";
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

var numFlips = argv["number"]
if(numFlips != null){
    var arrFlips = defaultExport.coinFlips(numFlips)
    var result = defaultExport.countFlips(arrFlips)
    console.log(arrFlips)
    console.log(result)
}
else{
    var arrFlips = defaultExport.coinFlips(1)
    var result = defaultExport.countFlips(arrFlips)
    console.log(arrFlips)
    console.log(result)
}

