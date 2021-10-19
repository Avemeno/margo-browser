declare namespace Margo {
  /**
   * Components exlusive for SI interface.
   */
  namespace SI {}
  enum Gender {
    Male = "m",
    Female = "f",
  }
  enum Stasis {
    Off,
    On,
  }
  enum Profession {
    Mag = "m",
    Warrior = "w",
    Paladin = "p",
    Hunter = "h",
    BladeDancer = "b",
    Tracker = "t",
  }
  interface Cords {
    x: number;
    y: number;
  }
  interface Id {
    id: string | number;
  }
  interface Hero extends Entity {
    prof: Profession;
    stasis: Stasis;
    /**
     * Go to `x`,`y` cords.
     * !WARNING:
     *   Margo are removing this function in runtime after few minutes of playing.
     *   They are sending `js` attribute in `Response` which is code responsible for that.
     */
    searchPath(x: number, y: number): void;
  }
  interface QueueData<T> {
    /**
     * Function invoked in next game loop with passed `data` parameter.
     */
    fun: (data?: T) => any;
    /**
     * Data which will be passed to `fun`.
     */
    data?: T;
  }
  type mixed<T> = undefined | T;
  type Name = string;
  interface Entity extends Cords, Id {
    nick: Name;
    lvl: number;
  }
  /**
   * `Actions` which NPC is capable.
   * !WARNING:
   *   This seems not to be the case most of the time.
   *   It is likely that Margo gives a crap just to
   *   `Daily`, `Quest` and `Daily` | `Quest`.
   */
  enum ActionsBitwise {
    Inkeeper = 0 << 1,
    Auction = 1 << 1,
    Post = 1 << 2,
    Depo = 1 << 3,
    DepoClan = 1 << 4,
    Shop = 1 << 5,
    Daily = 1 << 6,
    Quest = 1 << 7,
    Tp = 1 << 8,
  }
  interface Npc extends Entity {
    actions: ActionsBitwise;
  }
  /**
   *
   */
  type Door = { [key: string]: boolean };
  type DoorId = { [key: number]: string };
  interface Engine {
    /**
     * Queue with functions which are executed in main loop of the game and then deleted.
     */
    loadQueue: mixed<QueueData<any>>[];
    /**
     * Array with all NPC entity, mobs included.
     */
    npc: mixed<Npc>[];
    gwIds: DoorId[];
    gw: Door[];
  }
  /**
   * Pvp status. `Green` not allowed. `Yellow` allowed if mutually agreed. `Red` allowed.
   * `Arena` same as green. `DifferentGreen` is the same as green.
   */
  enum PvpStatus {
    Green = 0,
    Yellow = 1,
    Red = 2,
    DifferentGreen = 3,
    Arena = 4,
  }
  interface Map extends Id {
    name: Name;
    pvp: PvpStatus;
  }
  type timestamp = number;
  enum Error {
    Ok = "ok",
    Err = "err",
  }
  enum Dir {
    Down,
    Left,
    Up,
    Right,
  }
  interface Other extends Cords {
    dir: Dir;
  }
  interface Response {
    ev: timestamp;
    e: Error;
    other?: { [key: string]: Other };
    d?: (string | number)[];
  }
}
declare var g: Margo.Engine;
declare var hero: Margo.Hero;
declare var map: Margo.Map;
