//those go UP
const zalgo_up = [
  "\u030d",
  "\u030e",
  "\u0304",
  "\u033f",
  "\u0311",
  "\u0306",
  "\u0352",
  "\u0357",
  "\u0351",
  "\u0308",
  "\u030a",
  "\u0342",
  "\u0344",
  "\u034a",
  "\u034b",
  "\u0303",
  "\u0302",
  "\u030c",
  "\u0300",
  "\u0301",
  "\u030b",
  "\u0312",
  "\u0313",
  "\u0314",
  "\u0309",
  "\u0363",
  "\u0364",
  "\u0366",
  "\u0367",
  "\u0368",
  "\u036a",
  "\u036b",
  "\u036c",
  "\u036e",
  "\u036f",
  "\u033e",
  "\u0346",
];

//those go DOWN
const zalgo_down = [
  "\u0316",
  "\u0317",
  "\u0318",
  "\u031c",
  "\u031d",
  "\u031e",
  "\u0320",
  "\u0324",
  "\u0325",
  "\u0329",
  "\u032a",
  "\u032b",
  "\u032d",
  "\u032e",
  "\u032f",
  "\u0331",
  "\u0332",
  "\u0333",
  "\u033a",
  "\u033b",
  "\u033c",
  "\u0347",
  "\u0348",
  "\u0349",
  "\u034e",
  "\u0353",
  "\u0354",
  "\u0356",
  "\u0359",
  "\u035a",
];

//those always stay in the middle
const zalgo_mid = [
  "\u0315",
  "\u031b",
  "\u0340",
  "\u0358",
  "\u0321",
  "\u0322",
  "\u0328",
  "\u0334",
  "\u0335",
  "\u034f",
  "\u035c",
  "\u035d",
  "\u035f",
  "\u0360",
  "\u0362",
  "\u0337",
  "\u0361",
];

const Z: { [key: number]: string[] } = {
  0: zalgo_up,
  1: zalgo_down,
  2: zalgo_mid,
};

export function zalgoify(str: string, runs: number): string {
  const MAX_RUNS = 10;
  if (runs > 10) {
    runs = MAX_RUNS;
    console.warn(`cannot zalgoify ${str} more than ${MAX_RUNS} times`);
  }

  if (runs <= 0) {
    return transform(str);
  }
  return zalgoify(transform(str), runs - 1);
}

function transform(str: string): string {
  const strArray = str.split("");
  return strArray
    .map((character) => {
      if (character === " ") {
        return character;
      }
      const randomZalgoType =
        Z[Math.floor(Math.random() * Object.keys(Z).length)];
      const randomZalgoCharacter =
        randomZalgoType[Math.floor(Math.random() * randomZalgoType.length)];
      return character + randomZalgoCharacter;
    })
    .join("");
}
