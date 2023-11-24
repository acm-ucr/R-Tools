export const VERTICES = {
  0: {
    value: "A",
    id: "0",
    radius: 25,
    x: 131,
    y: 233,
  },
  1: {
    value: "B",
    color: "teal",
    id: "1",
    radius: 25,
    x: 486,
    y: 358,
  },
  3: {
    value: "C",
    id: "3",
    radius: 25,
    x: 178,
    y: 111,
  },
  4: {
    value: "D",
    id: "4",
    radius: 25,
    x: 335,
    y: 542,
  },
  5: {
    value: "E",
    color: "pink",
    id: "5",
    radius: 25,
    x: 131,
    y: 504,
  },
  7: {
    value: "F",
    color: "purple",
    id: "7",
    radius: 25,
    x: 130,
    y: 28,
  },
  8: {
    value: "G",
    color: "pink",
    id: "8",
    radius: 25,
    x: 66,
    y: 433,
  },
  6: {
    value: "H",
    color: "orange",
    id: "6",
    radius: 25,
    x: 480,
    y: 133,
  },
  2: {
    value: "I",
    id: "2",
    radius: 25,
    x: 201,
    y: 130,
  },
  9: {
    value: "J",
    color: "teal",
    id: "9",
    radius: 25,
    x: 154,
    y: 151,
  },
};

export const EDGES = {
  1: [{ to: 0 }, { to: 3, color: "purple" }, { to: 9, color: "orange" }],
  2: [{ to: 1 }, { to: 3 }, { to: 4 }],
  3: [{ to: 2 }, { to: 4 }],
  4: [{ to: 3 }],
  5: [{ to: 2 }, { to: 6 }],
  6: [{ to: 5 }, { to: 7 }],
  7: [{ to: 4, color: "teal" }, { to: 6 }, { to: 8 }],
  8: [{ to: 7 }],
  9: [{ to: 0 }, { to: 8, color: "pink" }],
};