/**
 * # Part 4) Pixel
 * Do this file last. If you haven't started yet, go back to person.ts.
 *
 * 4.1. Create a class named `Pixel` that has three private number fields: `red`, `green`, and `blue`.
 * 4.2. Create a Pixel constructor that takes in three parameters (red, green, blue) and assigns them to the appropriate fields.
 *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
 * 4.3. Create a Pixel method named `update` that consumes three number parameters (red, green, blue) and sets the fields to the new values.
 *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
 *      **PROTIP**: Define a helper function (or method) that takes in a number and returns the number if it is between 0 and 255, or 0 if it is
 *                  less than 0, or 255 if it is greater than 255. Use this function in the constructor and `update` method.
 *                  It'll all be useful for 4.5 and 4.6!
 * 4.4. Create a Pixel method named `getRGB` that returns the string representation of the pixel in the
 *      format "rgb(R, G, B)", where the letters are replaced with the appropriate numbers. Don't forget to
 *      look at the test cases if you need to get an idea of what this looks like!
 * 4.5. Create a Pixel method named `makeGrayscale` that averages the red, green, and blue values and
 *      sets all three fields to the average. So, for instance, the average of (10, 20, 30) is 20, so all three
 *      fields would be set to 20.
 * 4.6. Create a Pixel method named `invert` that subtracts the red, green, and blue values from 255
 *      and sets the fields to the new values. So, for instance, if the red value is 10, the green value is 20, and
 *      the blue value is 30, then the new values would be 245, 235, and 225.
 * 4.7. Create a function named `invertPixels` that takes in a 2D array of Pixels and inverts each pixel.
 *      This should not return anything, but should modify the original array using the `invert` method.
 */

export class Pixel {
    private red: number = 0;
    private blue: number = 0;
    private green: number = 0;

    helper(num: number) {
        if (num > 255) {
            return 255;
        }
        if (num < 0) {
            return 0;
        } else {
            return num;
        }
    }

    constructor(red: number, green: number, blue: number) {
        this.red = this.helper(red);
        this.green = this.helper(green);
        this.blue = this.helper(blue);
    }

    update(red: number, green: number, blue: number) {
        this.red = this.helper(red);
        this.green = this.helper(green);
        this.blue = this.helper(blue);
    }

    getRGB() {
        let red_string: string = this.red.toString();
        let green_string: string = this.green.toString();
        let blue_string: string = this.blue.toString();

        return (
            "rgb(" + red_string + ", " + green_string + ", " + blue_string + ")"
        );
    }

    makeGrayscale() {
        let new_red: number = this.helper(this.red);
        let new_green: number = this.helper(this.green);
        let new_blue: number = this.helper(this.blue);
        let total: number = new_red + new_green + new_blue;
        let average: number = total / 3;
        this.red = average;
        this.blue = average;
        this.green = average;
    }

    invert() {
        let new_red: number = this.helper(this.red);
        let new_green: number = this.helper(this.green);
        let new_blue: number = this.helper(this.blue);
        let third_red: number = 255 - new_red;
        let third_blue: number = 255 - new_blue;
        let third_green: number = 255 - new_green;
        this.blue = third_blue;
        this.red = third_red;
        this.green = third_green;
    }
}

/**
 * Invert all the pixels of a 2D array of Pixels.
 * @param pixels 2D array of Pixels
 * @modifies pixels
 */
export function invertPixels(pixels: Pixel[][]): void {
    for (const row of pixels) {
        for (const pixel of row) {
            pixel.invert();
        }
    }
}
