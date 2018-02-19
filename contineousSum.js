// Largest Sum Contiguous Subarray
// Given a List determine if contiguous elements of the List sum to an input number.
// For example: Array/List [6 5 3 2 1 7], and input number 8. The numbers 5 + 3 = 8.
// Or suppose an input number 10, the elements of the list 2 + 1 + 7 = 10.

function contineousSum(arr, sum) {

	if (!arr) return;

	let currentSum = arr[0];

	for (let i=0; i< arr.length; ++i) {
		if (currentSum === sum) {
			return true;
		}

		if (currentSum > sum) {
			currentSum = 0;
		}

		currentSum += arr[i];
	}

	return false;
}

var arr = [6, 5, 3, 2, 1, 7];

console.info(contineousSum(arr, 10))