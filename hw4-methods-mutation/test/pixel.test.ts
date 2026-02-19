import { Pixel, invertPixels } from "../src/pixel";

describe('Pixel class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new Pixel(0, 0, 0)).toEqual({ red: 0, green: 0, blue: 0 });
            expect(new Pixel(10, 77, 50)).toEqual({ red: 10, green: 77, blue: 50 });
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

    describe('Update', () => {
        test('(1 pts) Update', () => {
            const pixel = new Pixel(0, 0, 0);
            expect(pixel).toEqual({ red: 0, green: 0, blue: 0 });

            pixel.update(10, 77, 50);
            expect(pixel).toEqual({ red: 10, green: 77, blue: 50 });

            pixel.update(255, 255, 255);
            expect(pixel).toEqual({ red: 255, green: 255, blue: 255 });

        });
        test('(1 pts) Constrained Update', () => {
            const pixel = new Pixel(128, 128, 128);
            expect(pixel).toEqual({ red: 128, green: 128, blue: 128 });

            pixel.update(-1, -2, -3);
            expect(pixel).toEqual({ red: 0, green: 0, blue: 0 });

            pixel.update(256, 300, 400);
            expect(pixel).toEqual({ red: 255, green: 255, blue: 255 });
        });
    });

    describe('getRGB', () => {
        test('(1 pts) Get RGB', () => {
            expect(new Pixel(0, 0, 0).getRGB()).toBe('rgb(0, 0, 0)');
            expect(new Pixel(40, 30, 20).getRGB()).toBe('rgb(40, 30, 20)');
            expect(new Pixel(255, 255, 255).getRGB()).toBe('rgb(255, 255, 255)');
        });

        test('(1 pts) Constrained Get RGB', () => {
            expect(new Pixel(-1, -1, -1).getRGB()).toBe('rgb(0, 0, 0)');
            expect(new Pixel(256, 256, 256).getRGB()).toBe('rgb(255, 255, 255)');
        });
    });

    describe('makeGrayscale', () => {
        test('(3 pts) Make Grayscale', () => {
            const pixel = new Pixel(0, 0, 0);
            expect(pixel).toEqual({ red: 0, green: 0, blue: 0 });
            pixel.makeGrayscale();
            expect(pixel).toEqual({ red: 0, green: 0, blue: 0 });

            const pixel2 = new Pixel(255, 255, 255);
            expect(pixel2).toEqual({ red: 255, green: 255, blue: 255 });
            pixel2.makeGrayscale();
            expect(pixel2).toEqual({ red: 255, green: 255, blue: 255 });

            const pixel3 = new Pixel(100, 200, 48);
            expect(pixel3).toEqual({ red: 100, green: 200, blue: 48 });
            pixel3.makeGrayscale();
            expect(pixel3).toEqual({ red: 116, green: 116, blue: 116 });
        });
    });

    describe('invert', () => {
        test('(3 pts) Invert', () => {
            const pixel = new Pixel(0, 0, 0);
            expect(pixel).toEqual({ red: 0, green: 0, blue: 0 });

            pixel.invert();
            expect(pixel).toEqual({ red: 255, green: 255, blue: 255 });

            const pixel2 = new Pixel(255, 255, 255);
            expect(pixel2).toEqual({ red: 255, green: 255, blue: 255 });

            pixel2.invert();
            expect(pixel2).toEqual({ red: 0, green: 0, blue: 0 });

            const pixel3 = new Pixel(100, 200, 50);
            expect(pixel3).toEqual({ red: 100, green: 200, blue: 50 });

            pixel3.invert();
            expect(pixel3).toEqual({ red: 155, green: 55, blue: 205 });

            pixel3.invert();
            expect(pixel3).toEqual({ red: 100, green: 200, blue: 50 });
        });
    });

});

describe('invertPixels', () => {
    test('(2 pts) Invert Pixels', () => {
        const pixels = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)]
        ];
        invertPixels(pixels);
        expect(pixels).toEqual([
            [new Pixel(255, 255, 255), new Pixel(0, 0, 0)],
            [new Pixel(155, 55, 205), new Pixel(205, 155, 55)]
        ]);
        invertPixels(pixels);
        expect(pixels).toEqual([
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255)],
            [new Pixel(100, 200, 50), new Pixel(50, 100, 200)]
        ]);
    });
    test('(1 pts) Bigger Pixel Matrix', () => {
        const pixels = [
            [new Pixel(0, 0, 0), new Pixel(255, 255, 255), new Pixel(100, 200, 50)],
            [new Pixel(50, 100, 200), new Pixel(200, 100, 50), new Pixel(255, 0, 0)],
            [new Pixel(0, 255, 255), new Pixel(255, 255, 0), new Pixel(0, 0, 255)]
        ];
        invertPixels(pixels);
        expect(pixels).toEqual([
            [new Pixel(255, 255, 255), new Pixel(0, 0, 0), new Pixel(155, 55, 205)],
            [new Pixel(205, 155, 55), new Pixel(55, 155, 205), new Pixel(0, 255, 255)],
            [new Pixel(255, 0, 0), new Pixel(0, 0, 255), new Pixel(255, 255, 0)]
        ]);
    });
    test('(1 pts) Empty Array', () => {
        const pixels: Pixel[][] = [];
        invertPixels(pixels);
        expect(pixels).toEqual([]);
    });
});