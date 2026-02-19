/**
 * # Part 4) Pixel
 * Do this file last. If you haven't started yet, go back to person.ts.
 *
 * 4.1. Create a class named `Pixel` that has three number fields: `red`, `green`, and `blue`.
 * 4.2. Create a Pixel constructor that takes in three parameters (red, green, blue) and assigns them to the appropriate fields.
 *      If any of the parameters are less than 0, set the field to 0. If any of the parameters are greater than 255, set the field to 255.
 * 4.3. Create a function named `countPixels` that consumes a 2D array of Pixel objects, and returns how many there are.
 * 4.4. Create a function named `averagePixel` that consumes a 2D array of Pixel objects and returns a new Pixel object that is the average of all the pixels.
 *      If the array is empty, return a new Pixel object with all fields set to 0.
 * 4.5. Create a function named `isRed` that consumes a 2D array of Pixel objects and returns true if all pixels are red (red > green and red > blue).
 *      If the array is empty, return true.
 */
export class Pixel {
    public red: number;
    public green: number;
    public blue: number;
    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        if (red < 0) {
            this.red = 0;
        }
        if (green < 0) {
            this.green = 0;
        }
        if (blue < 0) {
            this.blue = 0;
        }
        if (red > 255) {
            this.red = 255;
        }
        if (green > 255) {
            this.green = 255;
        }
        if (blue > 255) {
            this.blue = 255;
        }
    }
}

export function countPixels(pixels: Pixel[][]): number {
    let count: number = 0;
    for (const pixel of pixels) {
        count += pixel.length;
    }
    return count;
}

export function averagePixel(pixels: Pixel[][]): Pixel {
    let red_total: number = 0;
    let green_total: number = 0;
    let blue_total: number = 0;
    let count: number = 0;
    for (const row of pixels) {
        for (const pixel of row) {
            red_total += pixel.red;
            green_total += pixel.green;
            blue_total += pixel.blue;
            count++;
        }
    }
    if (count == 0) {
        return new Pixel(0, 0, 0);
    }
    let average_red = red_total / count;
    let average_green = green_total / count;
    let average_blue = blue_total / count;
    let new_pixel = new Pixel(average_red, average_green, average_blue);
    return new_pixel;
}

export function isRed(pixels: Pixel[][]): boolean {
    if (pixels.length == 0) {
        return true;
    }
    let count: number = 0;
    for (const row of pixels) {
        for (const pixel of row) {
            if (pixel.red <= pixel.green || pixel.red <= pixel.blue) {
                count += 1;
            }
        }
    }
    if (count > 0) {
        return false;
    } else {
        return true;
    }
}
