// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function arrayPairSum(input, sum) {

  if (!input || !sum) return;

  // map to store result
  let map = {}, result = {};

  input.forEach(item => {
    if (map[item] !== undefined) {
      result[item] =  map[item];
    } else {
      map[sum - item] = item;
    }
  });

  return result;
}

// return index
// function twoSum(nums, taret) {
//   if (!nums || !target) return;

//   let map = new Map();
//   let result = [];

//   for (let i=0; i<nums.length; i++) {
//     let item = nums[i];

//     if (map.get(item) === undefined) {
//       map.set(target - item, i);
//     } else {
//       result.push( map.get(item), i);
//     }
//   }

//   return result;
// }

console.info(arrayPairSum([1,3,4,5,7,0,9], 10));