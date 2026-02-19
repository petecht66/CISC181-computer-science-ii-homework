/**
 * # Part 2) House
 * You should complete this file AFTER person.ts!
 *
 * 2.1. Create a class named `House` that has two string fields: `owner` (Person) and `address` (string).
 * 2.2. Create a House constructor that takes in two parameters (owner and address), and assigns them to the appropriate field.
 *      The owner should be a Person object.
 * 2.3. Create a function named `buyHouses` that takes a Person object and an array of strings (addresses), and returns an
 *      array of new House objects.
 *      The owner of each house should be the given Person object, and the addresses should be the given array of strings.
 * 2.4. Create a function named `findByOwner` that takes in an array of `House` objects and a string parameter (ownerName) and
 *      returns an array of `House` objects and a string parameter (owner) and returns an array of `House` objects that have the given owner.
 *      The house's owner's name should be the first name plus the last name, separated by a space.
 *
 */
import { Person } from "./person";
export class House {
    public owner: Person = new Person("", "", 0);
    public address: string;
    constructor(owner: Person, address: string) {
        this.owner = owner;
        this.address = address;
    }
}

export function buyHouses(person: Person, addresses: string[]): House[] {
    let house_array: House[] = [];
    for (let i: number = 0; i < addresses.length; i++) {
        house_array.splice(
            i,
            0,
            new House(
                new Person(person.firstName, person.lastName, person.age),
                addresses[i],
            ),
        );
    }
    return house_array;
}

export function findByOwner(houses: House[], ownerName: string): House[] {
    let house_array: House[] = [];
    let j: number = 0;
    for (let i: number = 0; i < houses.length; i++) {
        if (
            houses[i].owner.firstName + " " + houses[i].owner.lastName ==
            ownerName
        ) {
            house_array.splice(j, 0, houses[i]);
            j++;
        }
    }
    return house_array;
}
