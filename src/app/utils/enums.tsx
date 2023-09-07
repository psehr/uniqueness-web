import enums from "uniqueness-rating-performance";

var myHeaders = new Headers();
myHeaders.append("Authorization", process.env.UNR_APIKEY!);
myHeaders.append("Content-Type", "application/json; charset=utf-8");

export var getInit: RequestInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "no-cache",
};

export var postInit: RequestInit = {
  method: "POST",
  headers: myHeaders,
  mode: "cors",
  cache: "no-cache",
};

export type Meta = {
  beatmap: {
    beatmapset_id: number;
    beatmap_id: number;
    artist: string;
    title: string;
    diffName: string;
    maxCombo: number;
  };
  player: {
    player: string;
    player_id: number;
  };
  score: {
    mods: string[];
    pp: number;
    accuracy: number;
    hits: {
      count0: number;
      count50: number;
      count100: number;
      count300: number;
    };
    combo: number;
  };
};

export type QueueScore = {
  score_id: number;
  timestamp: number;
};

export type Score = {
  score: enums.uniqueness;
  meta: Meta;
};

export enum sortTypes {
  player,
  score,
  mods,
  pp,
  unr,
  timestamp,
}

export type Column = {
  label: string;
  accessor: string;
};
