/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

*/
function doubleValues(arr) {
	let newArray = [];
	arr.forEach(function (num) {
		newArray.push(num * 2);
	});
	return newArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/
function onlyEvenValues(arr) {
	newArray = [];
	arr.filter(function (num) {
		if (num % 2 === 0) {
			newArray.push(num);
		}
	});
	return newArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(arr) {
	let newArray = [];
	arr.map(function (char) {
		newArray.push(char[0] + char[char.length - 1]);
	});
	return newArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
*/
function addKeyAndValue(arr, key, value) {
	let newArr = [];

	arr.map(function (arr) {
		let profile = {};
		profile = arr;
		profile[key] = value;
		newArr.push(profile);
	});
	return newArr;

	//SPRINGBOARD SOLUTION:==============
	// arr.forEach(function (val) {
	// 	val[key] = value;
	// });
	// return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(str) {
	let lowerStr = Array.from(str.toLowerCase());
	// console.log(lowerStr);
	let newObj = {};
	const vowels = 'aeiou';
	lowerStr.forEach(function (char) {
		if (vowels.includes(char)) {
			if (!newObj[char]) {
				newObj[char] = 1;
			} else {
				newObj[char]++;
			}
		}
	});
	return newObj;
}
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

function doubleValuesWithMap(arr) {
	let newArray = [];
	arr.map(function (num) {
		newArray.push(num * 2);
	});
	return newArray;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/

function valTimesIndex(arr) {
	return arr.map(function (nums, i) {
		// for (let i = 0; i < arr.length; i++); // NOT NEEDED
		return nums * i;
	});
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/

function extractKey(arr, key) {
	const newArr = arr.map(function (obj) {
		return obj[key];
	});
	return newArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
*/

function extractFullName(arr) {
	return arr.map(function (obj) {
		return `${obj.first} ${obj.last}`;
	});
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
	return arr.filter(function (obj) {
		return obj[key] === true;
		// return obj[key] !== undefined; //SPRINGBOARD SOLUTION
	});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

// function find(arr, searchValue) {
// 	return arr.filter(function (num) {
// 		if (num === searchValue) {
// 			return num;
// 		} else return undefined;
// 	});
// }
// SPRINGBOARD SOLUTION:
function find(arr, searchValue) {
	return arr.filter(function (val) {
		return val === searchValue; // why does this return num instead of array.
	})[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
	return arr.filter(function (obj) {
		if (obj[key] !== searchValue) {
		} else return obj;
	})[0];
}
// SPRINGBOARD SOLUTION:
// function findInObj(arr, key, searchValue) {
// 	return arr.filter(function (obj) {
// 		return obj[key] === searchValue;
// 	})[0];
// }

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/

function removeVowels(str) {
	const vowels = 'aeiou';
	const lowerStr = str.toLowerCase();
	const splitStr = lowerStr.split('');
	// console.log(splitStr);
	return splitStr
		.filter(function (char) {
			return vowels.indexOf(char) === -1;
		})
		.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
*/

function doubleOddNumbers(arr) {
	let odds = arr.filter(function (nums) {
		return nums % 2 !== 0;
	});
	let newArr = odds.map(function (nums) {
		return nums * 2;
	});
	return newArr;
}
