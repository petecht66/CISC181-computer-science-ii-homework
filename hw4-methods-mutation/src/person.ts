/**
 * # Part 1) Person
 * We recommend you complete this part first!
 *
 * Note that you will need to define and export the class and all the functions in this file, before you can
 * run the unit tests. Write "stubs" for the functions before you try to implement them (just the header and a
 * basic return statement, returning a suitable "dummy" value, such as 0 or ""). This will allow you to run the
 * tests and see which functions are being called, and what they are returning.
 *
 * 1.1 Create a class named `Person` that has three fields: `firstName` (string), `lastName` (string), and `age` (number).
 *      Make the `age` field public, but the name fields should be private.
 * 1.2. Create a Person constructor that takes in three parameters (firstName, lastName, age) and assigns them to the appropriate fields.
 * 1.3. Create a Person method named `getDogYears` that returns the age of the person in dog years (age * 7).
 * 1.4. Create a Person method named `getFullName` that returns the full name of the person (firstName + lastName)
 *      with a space in between.
 * 1.5. Create a Person method named `withTitle` that consumes a string parameter (title) and returns the
 *      last name of the person with the title before it. For example, if the person's last name is "Bart" and
 *      the title is "Dr.", then the result is "Dr. Bart".
 * 1.6. Create a Person method named `clone` that returns a new Person object with the same first name, last name, and age.
 */

export class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getDogYears() {
        return this.age * 7;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    withTitle(title: string) {
        return title + " " + this.lastName;
    }

    clone() {
        let person2: Person = new Person(
            this.firstName,
            this.lastName,
            this.age,
        );
        return person2;
    }
}
