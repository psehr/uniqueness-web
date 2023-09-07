import { Meta } from "./enums";
import { formatAccuracy, formatPP } from "../components/ScoreRow";

export function parse_ids(ids: string) {
  const regexp = /^[0-9]+$/;
  let casted: number[] = [];
  let id_list = ids;
  let strings = id_list.replaceAll(" ", "");
  let castedStrings = strings.split(",");

  castedStrings.map((value) => {
    let splitted = value.split("/");
    for (let index = 0; index < splitted.length; index++) {
      const element = splitted[index];
      element.match(regexp) ? casted.push(parseFloat(element)) : null;
    }
  });

  for (let index = 0; index < castedStrings.length; index++) {
    const element = castedStrings[index];
    element.match(regexp) ? casted.push(parseFloat(element)) : null;
  }

  return casted;
}

export function unrColorCode(unr: number): string {
  let colorCode = "text-[#ff0000]";

  if (unr < 10) {
    colorCode = "text-[#ff0000]";
  } else if (unr < 30) {
    colorCode = "text-[#ffa200]";
  } else if (unr < 50) {
    colorCode = "text-[#fff200]";
  } else if (unr < 70) {
    colorCode = "text-[#ddff00]";
  } else if (unr < 100) {
    colorCode = "text-[#3cff00]";
  }

  return colorCode;
}

export function formatTitle(meta: Meta) {
  let artist = meta.beatmap.artist;
  let title = meta.beatmap.title;
  let diffName = meta.beatmap.diffName;
  let mods = meta.score.mods.length
    ? meta.score.mods.toString().replaceAll(",", "")
    : "NM";
  if (artist.length > 30) {
    artist = artist.slice(0, 20);
    artist = artist + "...";
  }
  if (title.length > 50) {
    title = title.slice(0, 30);
    title = title + "...";
  }
  if (diffName.length > 30) {
    diffName = diffName.slice(0, 30);
    diffName = diffName + "...";
  }

  return `${artist} - ${title} [${diffName}] +${mods}`;
}

export function formatScoreStats(meta: Meta) {
  let pp = formatPP(meta.score.pp);
  let acc = formatAccuracy(meta.score.accuracy);
  let missCount = meta.score.hits.count0;
  let count100 = meta.score.hits.count100;
  let count50 = meta.score.hits.count50;
  let combo = meta.score.combo;
  let maxCombo = meta.beatmap.maxCombo;

  return `${pp}pp | ${acc}% ${missCount}✗ ${count100}x100 ${count50}x50 | ${combo}/${maxCombo}`;
}
