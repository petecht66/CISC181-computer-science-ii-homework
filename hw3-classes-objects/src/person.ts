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
 * 1.2. Create a Person constructor that takes in three parameters (firstName, lastName, age) and assigns them to the appropriate fields.
 * 1.3. Create a function named `averageAge` that consumes an array of Person objects and returns their average age.
 *       If the array is empty, return 0.
 * 1.4. Create a function named `getFullNames` that consumes an array of Person objects and returns a newline ("\n") separated string
 *      in the format "firstName lastName". Hint: look up the join method for arrays.
 * 1.5. Create a function named `youngestPerson` that consumes an array of Person objects and returns the name of the youngest person.
 *      If there is a tie, return the name of the first youngest person.
 *      If the array is empty, return an empty string.
 *      Make sure you return both parts of their name separated by a space.
 */
export class Person {
    public firstName: string;
    public lastName: string;
    public age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

export function averageAge(people: Person[]): number {
    if (people.length == 0) {
        return 0;
    }
    let total: number = 0;
    let count: number = 0;
    for (let i: number = 0; i < people.length; i++) {
        total = total + people[i].age;
        count++;
    }
    return total / count;
}

export function getFullNames(people: Person[]): string {
    let fullNames: string[] = [];
    for (let i: number = 0; i < people.length; i++) {
        fullNames.splice(i, 0, people[i].firstName + " " + people[i].lastName);
    }
    return fullNames.join("\n");
}

export function youngestPerson(people: Person[]): string {
    if (people.length == 0) {
        return "";
    }
    let youngestName: string = "";
    let youngestAge: number = 999;
    for (let i: number = 0; i < people.length; i++) {
        if (people[i].age < youngestAge) {
            youngestAge = people[i].age;
            youngestName = people[i].firstName + " " + people[i].lastName;
        }
    }
    return youngestName;
}
