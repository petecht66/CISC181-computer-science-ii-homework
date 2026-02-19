import { House } from "../src/house";
import { Person} from "../src/person";

describe('House class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            expect(new House(johnDoe, '123 Main St')).toEqual({ owner: { firstName: 'John', lastName: 'Doe', age: 20 }, address: '123 Main St' });
            const adaBart = new Person('Ada', 'Bart', 6);
            expect(new House(adaBart, '456 Broadway')).toEqual({ owner: { firstName: 'Ada', lastName: 'Bart', age: 6 }, address: '456 Broadway' });
        });
    });

    describe('toString', () => {
        test('(1 pts) toString', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            const house = new House(johnDoe, '123 Main St');
            expect(house.toString()).toBe('This house is owned by John Doe and is located at 123 Main St');
            const adaBart = new Person('Ada', 'Bart', 6);
            const house2 = new House(adaBart, '456 Broadway');
            expect(house2.toString()).toBe('This house is owned by Ada Bart and is located at 456 Broadway');
        });
    });

    describe('buyFrom', () => {
        test('(1 pts) Buy From', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            const house = new House(johnDoe, '123 Main St');
            expect(house.owner).toBe(johnDoe);
            const janeDoe = new Person('Jane', 'Doe', 25);
            expect(house.buyFrom(janeDoe)).toBe('Jane Doe bought the house!');
            expect(house.owner).toBe(janeDoe);
        });
        test('(1 pts) buyFrom - too young', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            const house = new House(johnDoe, '123 Main St');
            expect(house.owner).toBe(johnDoe);
            const adaBart = new Person('Ada', 'Bart', 6);
            expect(house.buyFrom(adaBart)).toBe('Sorry, Ada Bart is too young to buy a house!');
            expect(house.owner).toBe(johnDoe);
        });
    });

    describe('clone', () => {
        test('(3 pts) Clone', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            const house = new House(johnDoe, '123 Main St');
            const house2 = house.clone();
            // Must be separate instances, with the same contents
            expect(house2).toEqual(house);
            expect(house2).not.toBe(house);
            // They have the same contents, but are different instances
            expect(house2.owner).not.toBe(johnDoe);
            expect(house2.owner).toEqual(johnDoe);
            // Should not modify original house
            expect(house.owner).toBe(johnDoe);
        });
    });

});
