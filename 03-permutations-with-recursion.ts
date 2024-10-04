const string3: string = "aexr";
const string4: string = "eiur";
const comparedStringsArray: string[] = [];

function arePermutationsV2(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  for (let i = 0; i < string1.length; i++) {
    counter(0, string1.charAt(i), string2);
  }

  return string1.length === comparedStringsArray.length;
}

function counter(count: number, string1char: string, string2: string) {
  if (count >= string1.length) {
    return;
  }

  if (string2.charAt(count) === string1char) {
    comparedStringsArray.push(string1char);
  }

  counter(count + 1, string1char, string2);
}

console.log(
  "Are " +
    string1 +
    " and " +
    string2 +
    " permutations? " +
    arePermutationsV2(string1, string2)
);
