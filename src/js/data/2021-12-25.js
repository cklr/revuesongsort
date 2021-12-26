dataSetVersion = "2021-12-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album/Singles",
    key: "albums",
    tooltip: "Check this to restrict to certain albums/singles.",
    checked: false,
    sub: [
      { name: "Singles", key: "single" },
      { name: "Anime Insert 1", tooltip: "Not the song (lol)", key: "LRdM" },
      { name: "Amime Insert 2", tooltip: "02 - Fuumaroku", key: "LRdS" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
    ]
  },
  {
    name: "Filter by Character",
    key: "character",
    tooltip: "Check this to restrict to characters that appear in songs.",
    checked: false,
    sub: [ { name: "Fuck You", key: "Karen" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Filter by Medium",
    key: "medium",
    tooltip: "There's too many songs. Help me.",
    checked: false,
    sub:[ { name: "Anime", key: "anime" }, {name: "Stage Plays", key: "stagep" }]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "You are a ghost, I am a ghost ～劇場のゴースト～",
    img: "Dw8rVEW.png",
    opts: {
      albums: [ "single"],
      character: ["st4"],
      medium: ["anime"]
    }
  },

  {
    name: "恋は太陽 ～CIRCUS!～",
    img: "i2UXQCl.png",
    opts: {
      albums: [ "single", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM" ],
      character: ["st4"]
    }
  },

  {
    name: "スタァライトシアター",
    img: "AVjcDEL.png",
    opts: {
      albums: [ "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS", "VD", "WBaWC", "UM" ],
      character: ["st3"]
    }
  },



];
