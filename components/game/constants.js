import Avatar1 from "./avatar/Avatar1.jpg";
import Avatar2 from "./avatar/Avatar2.jpg";
import Avatar3 from "./avatar/Avatar3.jpg";
import Avatar4 from "./avatar/Avatar4.jpg";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const players = [
  {
    id: 1,
    name: "Vasek",
    avatar: Avatar1,
    rating: 1180,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Dogigigigigigigigigigigigigigigigigigigigi",
    avatar: Avatar2,
    rating: 720,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Otter",
    avatar: Avatar3,
    rating: 980,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Parrot",
    avatar: Avatar4,
    rating: 1590,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
