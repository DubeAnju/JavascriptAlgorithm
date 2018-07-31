/** Count ways to express a number as sum of consecutive numbers
  * @method numberOfWays
 */
function numberOfWays(num) {
  if (!num) return;

  let sumSoFar = 0;
  let ways = 0;

  for (let i=1; i<num; i++) {
    sumSoFar = i;
    for (let j=i+1; j<num; j++) {
      sumSoFar += j;

      if (sumSoFar === num) {
        ways++;
        sumSoFar = 0;
        break;
      }
    }
  }
  return ways;
}