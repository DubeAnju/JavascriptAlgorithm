function arrayPairSum(input, sum) {

  if (!input || !sum) return;

  // map to store result
  let map = {}, result = {};

  input.forEach(item => {
    if (map[item] !== undefined) {
      result[item] =  map[item];
    } else {
      map[sum - item] = item
    }
  });

  return result;

}


console.info(arrayPairSum([1,3,4,5,7,0,9], 10));