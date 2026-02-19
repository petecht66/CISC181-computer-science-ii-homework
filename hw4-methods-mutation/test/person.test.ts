import {Person} from "../src/person";

describe('Person class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new Person('John', 'Doe', 20)).toEqual({ firstName: 'John', lastName: 'Doe', age: 20 });
            expect(new Person('Ada', 'Bart', 6)).toEqual({ firstName: 'Ada', lastName: 'Bart', age: 6 });
        });
    });

    describe('Field Privacy', () => {
        test('(1 pts) Field Privacy', () => {
            const person = new Person('John', 'Doe', 20);
            // Verify that the fields do actually exist
            // Abuses the fact that JavaScript doesn't enforce privacy
            // Never actually do this in real code to circumvent privacy!
            expect(person['firstName']).toEqual('John');
            expect(person['lastName']).toEqual('Doe');
            // Verify that the other field is publicly accessible
            expect(person.age).toBe(20);
        });
    });

    describe('getFullName', () => {
        test('(1 pts) Get Full Name', () => {
            expect(new Person('John', 'Doe', 20).getFullName()).toBe('John Doe');
            expect(new Person('Ada', 'Bart', 6).getFullName()).toBe('Ada Bart');
        });
    });

    describe('getDogYears', () => {
        test('(1 pts) Get Dog Years', () => {
            expect(new Person('John', 'Doe', 20).getDogYears()).toBe(140);
            expect(new Person('Ada', 'Bart', 6).getDogYears()).toBe(42);
        });
    });

    describe('withTitle', () => {
        test('(1 pts) With Title', () => {
            expect(new Person('John', 'Doe', 20).withTitle('Dr.')).toBe('Dr. Doe');
            expect(new Person('Ada', 'Bart', 6).withTitle('Ms.')).toBe('Ms. Bart');
            expect(new Person('Babbage', 'Bart', 7).withTitle('Mr.')).toBe('Mr. Bart');
        });
    });

    describe('clone', () => {
        test('(3 pts) Clone', () => {
            const person = new Person('John', 'Doe', 20);
            const person2 = person.clone();
            // Must be separate instances, with the same contents
            expect(person2).toEqual(person);
            expect(person2).not.toBe(person);
            // Should not modify original person
            expect(person).toEqual({ firstName: 'John', lastName: 'Doe', age: 20 });
        });
    });
});
