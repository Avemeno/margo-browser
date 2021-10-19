import { Option, Some, None } from "ts-results";

type KVMargonemNpc = keyof Margo.Npc;
export function getNpcByKey<T extends KVMargonemNpc>(key: T, value: Margo.Npc[T]): Option<Margo.Npc> {
  const npc = Object.values(g.npc).find((npc) => npc[key] === value);
  return npc ? Some(npc) : None;
}