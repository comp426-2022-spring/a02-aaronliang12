import defaultExport from "./modules/coin.mjs";
import minimist from "minimist"
const argv = minimist(process.argv.slice(2))

var call = argv["call"]

if(call == null){
    console.log("Error: no input");
    
}
else if  (call != "heads" && call != "tails"){
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else{
    console.log(defaultExport.flipACoin(call));
}

