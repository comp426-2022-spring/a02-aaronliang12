import defaultExport from "./modules/coin.mjs";
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

var call = argv["call"]

if(call == null || (call != "heads" && call != "tails")){
    console.error("Error: no input");
    console.error("Usage: node guess-flip --call=[heads|tails]");
}
else{
    console.log(defaultExport.flipACoin(call));
}

