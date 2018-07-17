// write a function that takes an array as input that can contain both ints and more arrays (which can also contain an array or int) and return the flattened array.
// ex. [1, [2, [ [3, 4], 5], 6]] =&gt; [1, 2, 3, 4, 5, 6]


function flattern(arr, output) {
	if (!arr) return;

	arr.forEach(item => {
		if (Array.isArray(item)) {
			flattern(item, output);
		} else {
			output.push(item);
		}
	});

	return output;
}

// Using Javascript reduce method

function flattenArray(arr) {
	if (!arr) return;

	return arr.reduce((acc, item) => {
		return acc.concat(item);
	});
}

console.info(flattern([1, [2, [ [3, 4], 5], 6]], []));