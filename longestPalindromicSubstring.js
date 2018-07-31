// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.

function longestPalindromicSubstring(str) {
  if (!str) return;

  if (str.length < 2) return str.length;

  if (str.split('').reverse().join('') === str) {
    return str.length;
  }


  let left = 0;
  let right = 0;
  let len = str.length;
  let max = 0;
  let start = 0;

  for (let i=0; i< len; i++) {
    left = i -1;
    right = i +1;

    while (left >=0 && right < len && str[left] === str[right]) {
        left--;
        right++;
    }

    if (right - left - 1 > max) {
      max = right - left - 1;
      start = left + 1;
    }
 }

  return str.slice(start, start+max);

}

console.info("longest-Palindromic-Substring", longestPalindromicSubstring("aaaaab"));