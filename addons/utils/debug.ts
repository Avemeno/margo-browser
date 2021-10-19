type DebugCallback = (...args: any) => void;
interface DebugFunction {
  old: string;
  history: any[];
  callback: DebugCallback;
}

/**
 * # Warning:
 * Doesn't work yet with functions within are `this` calls.
 * # Example usage:
 * ```ts
 * dbg.debug('message');
 * message('foo');  // output arguments to console
 * dbg.changed['message']callback = (data) =>
 *    mAlert(data[0]);
 * message('test'); // Also calling mAlert('test');
 * // History of arguments which were passed to `message`
 * // function sinse started debugger.
 * console.log(dbg.changed['message']history);
 * dbg.reset();
 * ```
 */
class Debugger {
  changed: { [key: string]: DebugFunction } = {};
  constructor() {}
  /**
   * Start debugging function.
   * @param fnPath Function path eg. `message`, `hero.searchPath`.
   * @param callback Function which will be embeded inner `fnPath`.
   */
  debug(
    fnPath: string,
    callback: DebugCallback = (d) => {
      console.log(d);
    }
  ): void {
    if (this.changed[fnPath]) {
      return;
    }
    const oldFn = eval(fnPath);
    const ctx: DebugFunction = { old: oldFn.toString(), history: [], callback };
    this.changed[fnPath] = ctx;
    eval(`${fnPath} = function() {
        ctx.history.push(arguments);
        callback(arguments);
        return oldFn(...arguments);
      }`);
  }
  /**
   * Revert function to the state before debugging.
   * @param fnName Function name
   */
  undebug(fnName: string) {
    const oldContent = this.changed[fnName].old;
    eval(`${fnName} = ${oldContent}`);
    delete this.changed[fnName];
  }
  /**
   * Same as `undebug` but for all functions.
   */
  reset() {
    for (let i in this.changed) {
      console.log(i);
      
      this.undebug(i);
    }
  }
}
let dbg: Debugger = unsafeWindow['dbg'];
if (!dbg) {
  dbg = new Debugger();
}
export default dbg;