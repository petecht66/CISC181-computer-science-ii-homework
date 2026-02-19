/**
 * # Part 2) House
 * You should complete this file AFTER person.ts!
 *
 *
 * 2.1. Create a class named `House` that has two public string fields: `owner` (Person) and `address` (string).
 *      Note that you need to `import` the Person class:
 *              import { Person } from "./person";
 * 2.2. Create a House constructor that takes in two parameters (owner and address), and assigns them to the appropriate field.
 *      The owner should be a Person object, so you will need to import the class.
 * 2.3. Create a House method named `toString` that returns a string in the format
 *      "This house is owned by {owner's full name} and is located at {address}".
 *      There should not be curly braces in the string, but the owner's full name should be the result of
 *      calling the `getFullName` method.
 * 2.4. Create a House method named `buyFrom` that takes in one `Person` parameter (person) and returns a string.
 *      If the person is under 18, then the method should return the string
 *          "Sorry, {buyer's full name} is too young to buy a house!"
 *      and NOT change the owner. Otherwise it SHOULD change the owner and return
 *          "{buyer's full name} bought the house!"
 * 2.5. Create a House method named `clone` that returns a new House object with the same address, but a separate
 *      copy of the owner. This means that if you change the name of the owner of the original house, the owner of
 *      the clone should not change. HINT: use the Person's clone method!
 *
 */

import { Person } from "./person";

export class House {
    public owner: Person;
    public address: string;
    constructor(owner: Person, address: string) {
        this.owner = owner;
        this.address = address;
    }

    toString() {
        return (
            "This house is owned by " +
            this.owner.getFullName() +
            " and is located at " +
            this.address
        );
    }

    buyFrom(person1: Person) {
        if (person1.age < 18) {
            return (
                "Sorry, " +
                person1.getFullName() +
                " is too young to buy a house!"
            );
        } else {
            this.owner = person1;
            return person1.getFullName() + " bought the house!";
        }
    }
    clone() {
        let new_owner: Person = this.owner.clone();
        let new_house: House = new House(new_owner, this.address);
        return new_house;
    }
}
