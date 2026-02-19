import {Person, averageAge, youngestPerson, getFullNames} from "../src/person";

describe('Person class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new Person('John', 'Doe', 20)).toEqual({ firstName: 'John', lastName: 'Doe', age: 20 });
            expect(new Person('Ada', 'Bart', 6)).toEqual({ firstName: 'Ada', lastName: 'Bart', age: 6 });
        });
    });
});

describe("averageAge", () => {
    test("(2 pts) Average Age", () => {
        const people = [
            new Person('John', 'Doe', 20),
            new Person('Ada', 'Bart', 6)
        ];
        expect(averageAge(people)).toBe(13);

        const people2 = [
            new Person('John', 'Doe', 20),
            new Person('Ada', 'Bart', 6),
            new Person('Babbage', 'Bart', 10)
        ];
        expect(averageAge(people2)).toBe(12);
    });

    test("(1 pts) Empty Array", () => {
        const people: Person[] = [];
        expect(averageAge(people)).toBe(0);
    });
});

describe("getFullNames", () => {
    test("(2 pts) Full Names", () => {
        const people = [
            new Person('John', 'Doe', 20),
            new Person('Ada', 'Bart', 6)
        ];
        expect(getFullNames(people)).toBe("John Doe\nAda Bart");

        const people2 = [
            new Person('John', 'Doe', 20),
            new Person('Ada', 'Bart', 6),
            new Person('Babbage', 'Bart', 10)
        ];
        expect(getFullNames(people2)).toBe("John Doe\nAda Bart\nBabbage Bart");
    });

    test("(1 pts) Empty Array", () => {
        const people: Person[] = [];
        expect(getFullNames(people)).toBe("");
    });
});

describe("youngestPerson", () => {
    test("(4 pts) Youngest Person", () => {
        const ada = new Person('Ada', 'Bart', 6);
        const babbage = new Person('Babbage', 'Bart', 7);
        const captain = new Person('Captain', 'Bart', 2);
        const domino = new Person('Domino', 'Bart', 1);

        expect(youngestPerson([ada, babbage, captain, domino])).toBe("Domino Bart");
        expect(youngestPerson([domino, captain, babbage, ada])).toBe("Domino Bart");
        expect(youngestPerson([captain, domino, babbage, ada])).toBe("Domino Bart");

        const edith = new Person('Edith', 'Eddington', 6);
        const frank = new Person('Frank', 'Ferguson', 1);
        const galactus = new Person('Galactus', 'Galactus', Number('Infinity'));

        expect(youngestPerson([edith, frank, galactus])).toBe("Frank Ferguson");
        expect(youngestPerson([frank, edith, galactus])).toBe("Frank Ferguson");

        expect(youngestPerson([ada, babbage, domino, frank])).toBe("Domino Bart");
        expect(youngestPerson([ada, babbage, frank, domino, edith])).toBe("Frank Ferguson");
    });

    test("(1 pts) Empty Array", () => {
        const people: Person[] = [];
        expect(youngestPerson(people)).toBe("");
    });
});