let string1: string = "aexr";
let string2: string = "rxea";

function arePermutationsV1(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  let a: string[] = [];
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1.charAt(i) === string2.charAt(j)) {
        a.push(string1.charAt(i));
        break;
      }
    }
  }

  return a.length === string1.length;
}

console.log(
  "Are " +
    string1 +
    " and " +
    string2 +
    " permutations? " +
    arePermutationsV1(string1, string2)
);
