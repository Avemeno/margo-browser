import { Interface } from "../typings/cookies";
import dbg from "./utils/debug";

function main() {
    unsafeWindow['dbg'] = dbg;
    console.log(Interface.NI);
    console.log('test')
}
main();