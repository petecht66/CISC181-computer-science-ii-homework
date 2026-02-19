/**
 * Complete the following problems using loops and arrays.
 */

/**
 * Given an array of numbers, return their sum. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The sum of all numbers in the array
 */
export function summate(nums: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

/**
 * Given an array of numbers, return their average. If the array is empty, return 0.
 * @param nums An array of numbers
 * @returns The average of all numbers in the array
 */
export function average(nums: number[]): number {
    if (nums.length == 0) {
        return 0;
    }
    let total: number = 0;
    let count: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        total += nums[i];
        count = i + 1;
    }
    return total / count;
}

/**
 * Given an array of numbers, divide each number by 2.
 * @param nums An array of numbers
 * @returns The array of numbers divided by 2
 */
export function halve(nums: number[]): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        nums[i] = nums[i] / 2;
    }
    return nums;
}

/**
 * Given an array of numbers, return only the positive numbers.
 * @param nums An array of numbers
 * @returns An array of only positive numbers
 */
export function onlyPositives(nums: number[]): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
}

/**
 * Given an array of numbers, return the average of only the positive numbers.
 * @param nums An array of numbers
 * @returns The average of only the positive numbers
 */
export function averagePositives(nums: number[]): number {
    if (nums.length == 0) {
        return 0;
    }
    let total: number = 0;
    let count: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total += nums[i];
            count = count + 1;
        }
    }
    if (count == 0) {
        return 0;
    }
    return total / count;
}

/**
 * Given an array of strings, return only the strings that end with 's'.
 * @param words An array of strings
 * @returns An array of only strings that end with 's'
 */
export function getPlurals(words: string[]): string[] {
    let new_words: string[] = [];
    let second_index: number = 0;
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].endsWith("s") || words[i].endsWith("S")) {
            new_words.splice(second_index, 0, words[i]);
            second_index++;
        }
    }
    return new_words;
}

/**
 * Given an array of strings, return the first string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * @param words An array of strings
 * @returns The first string that ends with 's'
 */
export function firstPlural(words: string[]): string {
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].endsWith("s") || words[i].endsWith("S")) {
            return words[i];
        }
    }
    return "";
}

/**
 * Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold.
 * @param nums An array of numbers
 * @param threshold A threshold number
 * @returns The array of numbers with values less than the threshold increased by 1
 */
export function growIfSmall(nums: number[], threshold: number): number[] {
    let answer_array: number[] = [];
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < threshold) {
            answer_array.splice(i, 0, nums[i] + 1);
        } else {
            answer_array.splice(i, 0, nums[i]);
        }
    }
    return answer_array;
}

/**
 * Given an array of strings, return the longest string.
 * If the array is empty, return an empty string.
 * If there is a tie, return the first longest string.
 * @param words An array of strings
 * @returns The longest string
 */
export function longestString(words: string[]): string {
    if (words.length == 0) {
        return "";
    }
    let longest_string: string = "";
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].length > longest_string.length) {
            longest_string = words[i];
        }
    }
    return longest_string;
}

/**
 * Given an array of strings, return the longest string that ends with 's'.
 * If no string ends with 's', return an empty string.
 * If there is a tie, return the first longest plural string.
 * @param words An array of strings
 * @returns The longest string that ends with 's'
 */
export function longestPlural(words: string[]): string {
    if (words.length == 0) {
        return "";
    }
    let longest_string: string = "";
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].length > longest_string.length && words[i].endsWith("s")) {
            longest_string = words[i];
        }
    }
    return longest_string;
}

/**
 * Given two arrays of numbers, add the numbers at each index together and return a new array of the sums.
 * If the arrays are different lengths, use the longer array's length and use zero for the missing values
 * in the smaller array.
 * @param nums1 An array of numbers
 * @param nums2 An array of numbers
 * @returns An array of the sums of the numbers at each index
 */
export function addPairs(nums1: number[], nums2: number[]): number[] {
    let longest_array: number[] = [];
    let shortest_array: number[] = [];
    let answer_array: number[] = [];
    if (nums1.length > nums2.length) {
        longest_array = nums1;
        shortest_array = nums2;
    } else {
        longest_array = nums2;
        shortest_array = nums1;
    }
    for (let i: number = 0; i < longest_array.length; i++) {
        if (i >= shortest_array.length) {
            answer_array.splice(i, 0, longest_array[i]);
        } else {
            answer_array.splice(i, 0, longest_array[i] + shortest_array[i]);
        }
    }
    return answer_array;
}
