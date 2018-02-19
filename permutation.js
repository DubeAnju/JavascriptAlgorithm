// permutation of a string

function permutation(str) {
  if (!str) return;

  if (str.length === 0 || str.length === 1) return str;

  let prefix = '';
  generatePermutation(prefix, str);
}

function generatePermutation(prefix, str) {
  let n = str.length;
  if (n === 0) {
      console.info("prefix", prefix);
  }

  for (let i=0; i< n; i++) {
      generatePermutation(prefix + str[i], str.substring(0, i) + str.substring(i+1, n))
  }
}

console.info(permutation("abc"))