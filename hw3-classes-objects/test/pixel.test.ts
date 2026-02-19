import { Pixel, countPixels, averagePixel, isRed } from "../src/pixel";

describe('Pixel class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new Pixel(0, 0, 0)).toEqual({ red: 0, green: 0, blue: 0 });
            expect(new Pixel(10, 100, 50)).toEqual({ red: 10, green: 100, blue: 50 });
            expect(new Pixel(255, 255, 255)).toEqual({ red: 255, green: 255, blue: 255 });
        });

        test('(1 pts) Constrain', () => {
            expect(new Pixel(-1, -1, -1)).toEqual({ red: 0, green: 0, blue: 0 });
            expect(new Pixel(55, -1, 44)).toEqual({ red: 55, green: 0, blue: 44 });
            expect(new Pixel(-50, 100, -44)).toEqual({ red: 0, green: 100, blue: 0 });
            expect(new Pixel(256, 256, 256)).toEqual({ red: 255, green: 255, blue: 255 });
            expect(new Pixel(256, 34, 27)).toEqual({ red: 255, green: 34, blue: 27 });
        });
    });
});

describe('countPixels', () => {
    test('(2 pts) Count Pixels', () => {
        const pixels = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)]
        ];
        expect(countPixels(pixels)).toEqual(4);

        const pixels2 = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(0, 0, 0), new Pixel(255, 255, 255)]
        ];
        expect(countPixels(pixels2)).toEqual(6);

        const pixels3 = [
            [new Pixel(0, 0, 0)],
            [new Pixel(255, 255, 255)]
        ];
        expect(countPixels(pixels3)).toEqual(2);

        const ManyPixels: Pixel[][] = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)],
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(0, 0, 0)],
            [new Pixel(255, 255, 255)]
        ];
        expect(countPixels(ManyPixels)).toEqual(12);
    });
    test('(1 pts) Empty Array', () => {
        const pixels: Pixel[][] = [];
        expect(countPixels(pixels)).toEqual(0);
    });
});

describe('averagePixel', () => {
    test('(2 pts) Average Pixel', () => {
        const simple = [
            [new Pixel(0, 0, 0), new Pixel(5, 5, 5)],
            [new Pixel(10, 10, 10), new Pixel(5, 5, 5)]
        ];
        expect(averagePixel(simple)).toEqual({ red: 5, green: 5, blue: 5 });


        const pixels = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)]
        ];
        expect(averagePixel(pixels)).toEqual({ red: 101.25, green: 138.75, blue: 126.25 });

        const pixels2 = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 202), new Pixel(0, 0, 0), new Pixel(255, 255, 255)]
        ];
        expect(averagePixel(pixels2)).toEqual({ red: 110, green: 135, blue: 127 });

        const pixels3 = [
            [new Pixel(0, 0, 0)],
            [new Pixel(255, 255, 255)]
        ];
        expect(averagePixel(pixels3)).toEqual({ red: 127.5, green: 127.5, blue: 127.5 });

        const ManyPixels: Pixel[][] = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)],
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(0, 0, 1)],
            [new Pixel(255, 255, 255)]
        ];
        expect(averagePixel(ManyPixels)).toEqual({ red: 110, green: 135, blue: 126.75 });
    });
    test('(1 pts) Empty Array', () => {
        const pixels: Pixel[][] = [];
        expect(averagePixel(pixels)).toEqual({ red: 0, green: 0, blue: 0 });
    });
});

describe('isRed', () => {
    test('(3 pts) Is Red', () => {
        const pixels = [
            [new Pixel(255, 0, 0), new Pixel(255, 254, 254)],
            [new Pixel(200, 50, 50), new Pixel(200, 100, 50)]
        ];
        expect(isRed(pixels)).toEqual(true);

        const pixels2 = [
            [new Pixel(0, 255, 255), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(0, 0, 0), new Pixel(255, 255, 255)]
        ];
        expect(isRed(pixels2)).toEqual(false);

        const pixels3 = [
            [new Pixel(0, 0, 0)],
            [new Pixel(255, 255, 255)]
        ];
        expect(isRed(pixels3)).toEqual(false);

        const pixels4 = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)],
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(0, 0, 0), new Pixel(255, 10, 100)],
            [new Pixel(255, 255, 255)]
        ];
        expect(isRed(pixels4)).toEqual(false);

        const pixels5 = [
            [new Pixel(1, 0, 0), new Pixel(255, 25, 25)],
            [new Pixel(100, 0, 50), new Pixel(50, 10, 20)],
            [new Pixel(50, 0, 0), new Pixel(255, 25, 5), new Pixel(100, 2, 5)],
            [new Pixel(250, 100, 200), new Pixel(255, 0, 0), new Pixel(255, 2, 25)],
            [new Pixel(3, 0, 0)],
            [new Pixel(255, 3, 3)]
        ];
        expect(isRed(pixels5)).toEqual(true);
    });
    test('(1 pts) Empty Array', () => {
        const pixels: Pixel[][] = [];
        expect(isRed(pixels)).toEqual(true);
    });
});