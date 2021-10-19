import { isInRadius } from "../utils";
import { getNpcByKey } from "../utils/npc";
import { config } from "./config";

export function main() {
  if (map.name !== config.baseMap.name) {
    if (map.id === 1316) {
      return;
    }
    bot();
  } else {
    makeFakeMap();
    const [x, y] = config.cords;
    const { id } = getWir();
    setInterval(() => {
      if (isInRadius({ x, y }, hero)) {
        talk(id, config.tp.wirDialog);
      }
    }, config.cd2);
  }
}
function getWir() {
  const wir = getNpcByKey("x", 88);
  return wir.unwrap();
}
function getTeleport() {
  const tp = getNpcByKey("nick", config.tp.nick);
  return tp.unwrap();
}
function makeFakeMap() {
  const cords = config.fakeMap.cords.join(".");
  g.gwIds[config.fakeMap.id] = cords;
  g.gw[cords] = true;
}
function talk(id, dialog) {
  const task = `talk&id=${id}`;
  _g(task, ({ d }) => {
    const index = d.findIndex((x) => x === dialog) + 1;
    _g(task + `&c=${d[index]}`);
  });
}
function bot() {
  map.id = config.baseMap.id;
  const tp = getTeleport();
  if (!tp) {
    return;
  }
  const cords = [tp.x, tp.y].join(".");
  g.gwIds[config.fakeMap.id] = cords;
  g.gw[cords] = true;
  setInterval(() => {
    if (isInRadius(tp, hero)) {
      talk(tp.id, config.tp.dialog);
    }
  }, config.cd2);
}
