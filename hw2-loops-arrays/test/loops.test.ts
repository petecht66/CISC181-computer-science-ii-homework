/**
 * Test all of the following problems using describe/test
 *
 * summate: Summate array of numbers
 * average: Average array of numbers
 * halve: Divide all values in the array by 2
 * onlyPositives: Filter all negative numbers out of array
 * averagePositives: Average array of numbers but ignore negatives
 * getPlurals: Given an array of strings return only the strings that end with 's'
 * firstPlural: Given an array of strings return the first string that ends with 's'
 * growIfSmall: Given an array of numbers and a threshold number, increase all values in the array by 1 if they are less than the threshold
 * longestString: Given an array of strings return the longest string
 * longestPlural: Given an array of strings return the longest string that ends with 's'
 * addPairs: Given two arrays of numbers, add the numbers at each index together and return a new array of the sums
 */

import {
    summate,
    average,
    halve,
    onlyPositives,
    averagePositives,
    getPlurals,
    firstPlural,
    growIfSmall,
    longestString,
    longestPlural,
    addPairs,
} from "../src/loops";

describe("summate function", () => {
    it("(1 pts) returns 0 for empty array", () => {
        expect(summate([])).toBe(0);
    });

    it("(1 pts) returns the sum of the array", () => {
        expect(summate([1, 2, 3])).toBe(6);
        expect(summate([3, 2, 1])).toBe(6);
    });

    it("(1 pts) handles negatives", () => {
        expect(summate([-1, 2, 3])).toBe(4);
        expect(summate([3, -2, -1])).toBe(0);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(summate([1, 2, 3, 10, 12])).toBe(28);
        expect(summate([1, 1, 1, 1, 1, 1, 1, 1])).toBe(8);
    });
});

describe("average function", () => {
    it("(1 pts) returns 0 for empty array", () => {
        expect(average([])).toBe(0);
    });

    it("(1 pts) returns the average of the array", () => {
        expect(average([1, 2, 3])).toBe(2);
        expect(average([3, 2, 1])).toBe(2);
    });

    it("(1 pts) handles negatives", () => {
        expect(average([-1, 2, 3])).toBe(4 / 3);
        expect(average([3, -2, -1])).toBe(0);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(average([1, 2, 3, 10, 12])).toBe(28 / 5);
        expect(average([1, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
    });
});

describe("halve function", () => {
    it("(1 pts) returns empty array for empty array", () => {
        expect(halve([])).toEqual([]);
    });

    it("(1 pts) returns the array halved", () => {
        expect(halve([1, 2, 3])).toEqual([0.5, 1, 1.5]);
        expect(halve([3, 2, 1])).toEqual([1.5, 1, 0.5]);
    });

    it("(1 pts) handles negatives", () => {
        expect(halve([-1, 2, 3])).toEqual([-0.5, 1, 1.5]);
        expect(halve([3, -2, -1])).toEqual([1.5, -1, -0.5]);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(halve([1, 2, 3, 10, 12])).toEqual([0.5, 1, 1.5, 5, 6]);
        expect(halve([1, 1, 1, 1, 1, 1, 1, 1])).toEqual([
            0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        ]);
    });
});

describe("onlyPositives function", () => {
    it("(1 pts) returns empty array for empty array", () => {
        expect(onlyPositives([])).toEqual([]);
    });

    it("(1 pts) returns only positive numbers", () => {
        expect(onlyPositives([1, 2, 3])).toEqual([1, 2, 3]);
        expect(onlyPositives([3, 2, 1])).toEqual([3, 2, 1]);
    });

    it("(1 pts) handles negatives", () => {
        expect(onlyPositives([-1, 2, 3])).toEqual([2, 3]);
        expect(onlyPositives([3, -2, -1])).toEqual([3]);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(onlyPositives([1, -2, 3, -10, 12])).toEqual([1, 3, 12]);
        expect(onlyPositives([-1, -1, -1, -1, -1, -1, -1, 1])).toEqual([1]);
    });
});

describe("averagePositives function", () => {
    it("(1 pts) returns 0 for empty array", () => {
        expect(averagePositives([])).toBe(0);
    });

    it("(1 pts) returns the average of the array", () => {
        expect(averagePositives([1, 2, 3])).toBe(2);
        expect(averagePositives([3, 2, 1])).toBe(2);
    });

    it("(1 pts) handles negatives", () => {
        expect(averagePositives([-1, 2, 3])).toBe(5 / 2);
        expect(averagePositives([3, -2, -1])).toBe(3);
    });

    it("(1 pts) handles all negatives", () => {
        expect(averagePositives([-1, -2, -3])).toBe(0);
        expect(averagePositives([-3, -2, -1])).toBe(0);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(averagePositives([1, 2, 3, -10, 12])).toBe(18 / 4);
        expect(averagePositives([1, -1, 1, -1, 1, -1, 1, -1])).toBe(1);
    });
});

describe("getPlurals function", () => {
    it("(1 pts) returns empty array for empty array", () => {
        expect(getPlurals([])).toEqual([]);
    });

    it("(1 pts) returns strings that end with s", () => {
        expect(getPlurals(["dogs", "cats", "birds"])).toEqual([
            "dogs",
            "cats",
            "birds",
        ]);
        expect(getPlurals(["cats", "dogs", "birds"])).toEqual([
            "cats",
            "dogs",
            "birds",
        ]);
    });

    it("(1 pts) handles no strings that end with s", () => {
        expect(getPlurals(["cat", "dog", "bird"])).toEqual([]);
    });

    it("(1 pts) handles empty strings", () => {
        expect(getPlurals(["", "s", "sss", "sh"])).toEqual(["s", "sss"]);
    });

    it("(1 pts) some but not all", () => {
        expect(getPlurals(["dogs", "cat", "birds"])).toEqual(["dogs", "birds"]);
        expect(getPlurals(["cats", "dogs", "bird"])).toEqual(["cats", "dogs"]);
        expect(getPlurals(["house", "boat", "cars"])).toEqual(["cars"]);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(
            getPlurals(["dogs", "cats", "birds", "cat", "dog", "birds"]),
        ).toEqual(["dogs", "cats", "birds", "birds"]);
        expect(getPlurals(["s", "s", "s", "Q", "s", "s"])).toEqual([
            "s",
            "s",
            "s",
            "s",
            "s",
        ]);
    });
});

describe("firstPlural function", () => {
    it("(1 pts) returns empty string for empty array", () => {
        expect(firstPlural([])).toBe("");
    });

    it("(1 pts) returns the first string that ends with s", () => {
        expect(firstPlural(["dogs", "cats", "birds"])).toBe("dogs");
        expect(firstPlural(["cats", "dogs", "birds"])).toBe("cats");
    });

    it("(1 pts) handles no strings that end with s", () => {
        expect(firstPlural(["cat", "dog", "bird"])).toBe("");
    });

    it("(1 pts) handles empty strings", () => {
        expect(firstPlural(["", "s", "sss", "sh"])).toBe("s");
    });

    it("(1 pts) some but not all", () => {
        expect(firstPlural(["dog", "cat", "birds"])).toBe("birds");
        expect(firstPlural(["cat", "dogs", "birds"])).toBe("dogs");
        expect(firstPlural(["houses", "boat", "car"])).toBe("houses");
    });

    it("(1 pts) handles longer arrays", () => {
        expect(
            firstPlural(["dogs", "cats", "birds", "cat", "dog", "birds"]),
        ).toBe("dogs");
        expect(firstPlural(["Q", "Q", "Q", "s", "Q", "ssss"])).toBe("s");
    });
});

describe("growIfSmall function", () => {
    it("(1 pts) returns empty array for empty array", () => {
        expect(growIfSmall([], 5)).toEqual([]);
    });

    it("(1 pts) returns the array unchanged if all values are greater than threshold", () => {
        expect(growIfSmall([6, 7, 8], 5)).toEqual([6, 7, 8]);
        expect(growIfSmall([8, 7, 6], 5)).toEqual([8, 7, 6]);
        expect(growIfSmall([8, 7, 6], 3)).toEqual([8, 7, 6]);
    });

    it("(1 pts) handles some values less than threshold", () => {
        expect(growIfSmall([4, 7, 8], 5)).toEqual([5, 7, 8]);
        expect(growIfSmall([8, 7, 4], 5)).toEqual([8, 7, 5]);
        expect(growIfSmall([1, 5, 10], 7)).toEqual([2, 6, 10]);
    });

    it("(1 pts) handles all values less than threshold", () => {
        expect(growIfSmall([4, 4, 4], 5)).toEqual([5, 5, 5]);
        expect(growIfSmall([4, 5, 6], 10)).toEqual([5, 6, 7]);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(growIfSmall([1, 2, 3, 4, 5, 6, 7, 8], 5)).toEqual([
            2, 3, 4, 5, 5, 6, 7, 8,
        ]);
        expect(growIfSmall([1, 1, 1, 1, 1, 1, 1, 1], 5)).toEqual([
            2, 2, 2, 2, 2, 2, 2, 2,
        ]);
        expect(growIfSmall([1, 1, 1, 1, 1, 1, 1, 1], 0)).toEqual([
            1, 1, 1, 1, 1, 1, 1, 1,
        ]);
    });

    it("(1 pts) does not modify the original array", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(growIfSmall(arr, 5)).toEqual([2, 3, 4, 5, 5, 6, 7, 8]);
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});

describe("longestString function", () => {
    it("(1 pts) returns empty string for empty array", () => {
        expect(longestString([])).toBe("");
    });

    it("(1 pts) returns the longest string", () => {
        expect(longestString(["dogs", "cats", "birds"])).toBe("birds");
        expect(longestString(["birds", "cats", "dogs"])).toBe("birds");
        expect(longestString(["cats", "birds", "dogs"])).toBe("birds");
    });

    it("(1 pts) handles empty strings", () => {
        expect(longestString(["", "s", "sss", "sh"])).toBe("sss");
    });

    it("(1 pts) handles longer arrays", () => {
        expect(
            longestString(["dogs", "cats", "alpha", "cat", "dog", "birds"]),
        ).toBe("alpha");
        expect(longestString(["Q", "Q", "Q", "s", "Q", "ssss"])).toBe("ssss");
    });

    it("(1 pts) handles ties", () => {
        expect(longestString(["dogs", "cats", "cat", "dog", "bird"])).toBe(
            "dogs",
        );
        expect(longestString(["Q", "Q", "Q", "s", "Q", "ssss", "qqqq"])).toBe(
            "ssss",
        );
    });
});

describe("longestPlural function", () => {
    it("(1 pts) returns empty string for empty array", () => {
        expect(longestPlural([])).toBe("");
    });

    it("(1 pts) returns the longest string that ends with s", () => {
        expect(longestPlural(["dogs", "cats", "birds"])).toBe("birds");
        expect(longestPlural(["birds", "cats", "dogs"])).toBe("birds");
        expect(longestPlural(["cats", "birds", "dogs"])).toBe("birds");
    });

    it("(1 pts) handles empty strings", () => {
        expect(longestPlural(["", "s", "sss", "sh"])).toBe("sss");
    });

    it("(1 pts) handles longer arrays", () => {
        expect(
            longestPlural(["dogs", "cats", "alpha", "cat", "dog", "birds"]),
        ).toBe("birds");
        expect(
            longestPlural(["dogs", "apples", "alphabet", "cat", "dog", "bird"]),
        ).toBe("apples");
        expect(longestPlural(["Q", "Q", "Q", "s", "Q", "ssss"])).toBe("ssss");
    });

    it("(1 pts) handles ties", () => {
        expect(longestPlural(["dogs", "cats", "cat", "dog", "bird"])).toBe(
            "dogs",
        );
        expect(longestPlural(["Q", "Q", "Q", "s", "Q", "ssss", "qqqs"])).toBe(
            "ssss",
        );
    });

    it("(1 pts) handles no strings that end with s", () => {
        expect(longestPlural(["cat", "dog", "bird"])).toBe("");
        expect(longestPlural(["house", "boat", "train"])).toBe("");
    });

    it("(1 pts) handles longest does not end with s", () => {
        expect(longestPlural(["cars", "boats", "airplane"])).toBe("boats");
        expect(longestPlural(["airplane", "cars", "boats"])).toBe("boats");
        expect(longestPlural(["boats", "cars", "airplane"])).toBe("boats");
    });
});

describe("addPairs function", () => {
    it("(1 pts) returns empty array for empty arrays", () => {
        expect(addPairs([], [])).toEqual([]);
    });

    it("(1 pts) returns the sum of the arrays", () => {
        expect(addPairs([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
        expect(addPairs([3, 2, 1], [6, 5, 4])).toEqual([9, 7, 5]);
    });

    it("(1 pts) handles negatives", () => {
        expect(addPairs([-1, 2, 3], [4, 5, 6])).toEqual([3, 7, 9]);
        expect(addPairs([3, -2, -1], [6, 5, 4])).toEqual([9, 3, 3]);
    });

    it("(1 pts) handles longer arrays", () => {
        expect(addPairs([1, 2, 3, 10, 12], [4, 5, 6, 20, 24])).toEqual([
            5, 7, 9, 30, 36,
        ]);
        expect(
            addPairs([1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]),
        ).toEqual([2, 2, 2, 2, 2, 2, 2, 2]);
    });

    it("(1 pts) does not modify the original arrays", () => {
        let arr1 = [1, 2, 3, 10, 12];
        let arr2 = [4, 5, 6, 20, 24];
        expect(addPairs(arr1, arr2)).toEqual([5, 7, 9, 30, 36]);
        expect(arr1).toEqual([1, 2, 3, 10, 12]);
        expect(arr2).toEqual([4, 5, 6, 20, 24]);
    });

    it("(1 pts) handles arrays of different lengths", () => {
        expect(addPairs([1, 2, 3], [4, 5, 6, 7])).toEqual([5, 7, 9, 7]);
        expect(addPairs([3, 2, 1, -1], [6, 5, 4])).toEqual([9, 7, 5, -1]);
    });
});
