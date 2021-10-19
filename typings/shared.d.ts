import { DecodeMethod, Interface, cookieInterface } from "./cookies";
interface Payload {
    /**
     * Message content
     */
    c: string,
}
/**
 * # Example usage:
 * ```ts
 * if (getCookie("interface") === "ni") {
 *  return console.error("Dodatek nie obsluguje nowego interfejsu");
 * }
 * ```
 * @param name Name of cookie to grab.
 * @param decode Method of decoding grabbed cookie, default is Margonem.decodeURI.
 * @return Grabbed value of cookie or null if cookie doesn't exist.
 */
declare function getCookie(name: string, decode?: DecodeMethod): string | null;
declare function getCookie(name: cookieInterface, decode?: DecodeMethod): Interface;
/**
 * Display non blocking message for player.
 * @param msg Content of displayed message.
 */
declare function message(msg: string): void;
declare function getCookie(name: string, decode?: boolean): string | null;
type cb = (data?: Margo.Response) => any;
/**
 * Example usage:
 * ```ts
 * // on SI
 * import { isInRadius } from '../utils';
 * const npc = Object.values(g.npc).find(npc => npc.nick === 'Aukcjoner');
 * if (!npc) {
 *   message('Nie ma takiego npc');
 * } else if (isInRadius(npc, hero)) {
 *   _g(`talk&id=${npc.id}`, (data) => {
 *     message(`Rozmawiasz z ${npc.nick}`);
 *   });
 * } else {
 *   hero.searchPath(npc.x, npc.y);
 * }
 * // on NI
 * // send message
 * _g("chat", false, { c: 'siema wale wiadro' });
 * ```
 * @param task
 * @param callback
 * @param payload
 */
 declare function _g(
    task: string,
    callback: cb | boolean,
    payload?: Payload,
  ): void;