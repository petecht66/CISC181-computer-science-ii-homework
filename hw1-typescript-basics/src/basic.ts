/**
 * Converts a temperature in Celsius to Fahrenheit using the formula F = (C * 9 / 5) + 32.
 * @param celsius A temperature in Celsius
 * @returns The temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
    return celsius * (9 / 5) + 32;
}

/**
 * Adds two numbers together only if they are positive numbers. If either number is negative, return 0.
 * @param a A number
 * @param b Another number
 * @returns The sum of the numbers, if they were both positive. Otherwise, returns 0.
 */
export function addIfPositive(a: number, b: number): number {
    if (a > 0 && b > 0) {
        return a + b;
    } else {
        return 0;
    }
}

/**
 * Returns the absolute difference between a and b (|a - b|). So difference(10, 5) === 5 and difference(5, 10) === 5.
 * @param a A number
 * @param b Another number
 * @returns The difference between a and b
 */
export function difference(a: number, b: number): number {
    return Math.abs(a - b);
}

/**
 * Calculates the area of a circle with the given radius.
 * @param radius The radius of the circle
 * @returns The area of the circle
 */
export function circleArea(radius: number): number {
    return Math.PI * radius * radius;
}

/**
 * Given the current temperature and the weather, returns what you should wear.
 * If it's sunny and over 70 degrees, return 't-shirt'.
 * If it's over 50 degrees, return 'sweater'.
 * Otherwise, return 'jacket'.
 * @param temperature
 * @param weather
 * @returns
 */
export function whatToWear(temperature: number, weather: string): string {
    if (temperature > 70 && weather == "sunny") {
        return "t-shirt";
    } else if (temperature > 50) {
        return "sweater";
    } else {
        return "jacket";
    }
}

/**
 * Given a grade, returns either "failing" or "passing" depending on if
 * the grade is an A, B, C (passing) or D, F (failing). No other grades
 * will be passed in.
 *
 * @param grade
 * @returns
 */
export function getGradeMessage(grade: string): string {
    if (grade == "D" || grade == "F") {
        return "failing";
    } else {
        return "passing";
    }
}

/**
 * Given a time in the format HH:MM, returns the number of minutes since midnight.
 * There are 60 minutes in an hour, so 1:00 is 60, 2:30 is 150, etc.
 *
 * @param time A time in the format HH:MM
 * @returns The number of minutes since midnight
 */
export function parseTime(time: string): number {
    const [hour, minutes] = time.split(":");
    let hour_num: number = parseInt(hour);
    let minutes_num: number = parseInt(minutes);
    return hour_num * 60 + minutes_num;
}

/**
 * Converts a word to Pig Latin. If the word starts with a vowel, add "ay" to the end.
 * Otherwise, move the first letter to the end, and add "ay".
 * @param word
 * @returns
 */
export function pigLatin(word: string): string {
    let lower_word: string = word.toLowerCase();
    let first_letter: string = word.charAt(0);
    let final_answer: string = "";
    if (
        lower_word.charAt(0) == "a" ||
        lower_word.charAt(0) == "e" ||
        lower_word.charAt(0) == "i" ||
        lower_word.charAt(0) == "o" ||
        lower_word.charAt(0) == "u"
    ) {
        final_answer = lower_word.concat("ay");
    } else {
        final_answer = lower_word.substring(1) + first_letter + "ay";
    }
    return final_answer;
}

/**
 * Given a word and a phrase, return the phrase with the first word removed.
 * Remove any extra spaces at the beginning of the phrase, after removing the word.
 * If the phrase does not start with the word, return the phrase unchanged.
 * @param word A word
 * @param phrase A phrase
 * @returns The phrase with the first word removed
 */
export function chompString(word: string, phrase: string): string {
    let word_length: number = word.length;
    let final_phrase: string = "";
    if (phrase.startsWith(word)) {
        final_phrase = phrase.slice(word_length);
        final_phrase = final_phrase.trim();
    } else {
        final_phrase = phrase;
    }
    return final_phrase;
}
