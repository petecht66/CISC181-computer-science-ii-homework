/**
 * # Part 3) NotePad
 * We recommend you do this file third. If you haven't already done
 * person.ts, then go there first!
 *
 * 3.1 Create a class named `NotePad` that has a string field `title` and a field `notes` that is an array of strings.
 * 3.2. Create a NotePad constructor that takes in one parameter (title) and sets the title to the title parameter. The notes array should be empty.
 * 3.3. Create a function named `longestNotePad` that takes in an array of `NotePad` objects and returns the title of the `NotePad` with the most notes.
 *       If there is a tie, return the title of the first `NotePad` with the most notes.
 *       If the array is empty, return an empty string.
 * 3.4. Create a function named `mergeNotes` that takes in an array of `NotePad` objects and returns a single `NotePad` object with the title "Merged Notes"
 *      and the notes from all the `NotePad` objects as one big long array. Do not modify the original NotePad objects.
 * 3.5. Create a function named `duplicateNote` that takes in an array of `NotePad` objects and the title of one of the NotePads (a string),
 *      and returns a new array of `NotePad` objects where the NotePad with the given title has a duplicate after the original.
 *      If the given title is not found, return the original array.
 *      Note that the duplicated NotePad should be a new instance, not a reference to the original NotePad!!
 *      All the other references should be the same as the original array, however.
 */
export class NotePad {
    public title: string;
    public notes: string[];
    constructor(title: string, notes: string[]) {
        this.title = title;
        this.notes = notes;
    }
}

export function longestNotePad(notepads: NotePad[]): string {
    if (notepads.length === 0) {
        return "";
    }
    let longest_length: number = -1;
    let longest_notepad_title: string = "";
    for (const notepad of notepads) {
        if (notepad.notes.length > longest_length) {
            longest_length = notepad.notes.length;
            longest_notepad_title = notepad.title;
        }
    }
    return longest_notepad_title;
}

export function mergeNotes(notepads: NotePad[]): NotePad {
    if (notepads.length == 0) {
        return new NotePad("Merged Notes", []);
    }
    let mergedNotes: string[] = [];
    for (const notepad of notepads) {
        mergedNotes.push(...notepad.notes);
    }
    return new NotePad("Merged Notes", mergedNotes);
}

export function duplicateNote(notepads: NotePad[], title: string): NotePad[] {
    let new_notepads: NotePad[] = [];
    let count: number = 0;
    for (let i: number = 0; i < notepads.length; i++) {
        new_notepads.push(notepads[i]);
        if (notepads[i].title === title) {
            let new_notepad = new NotePad(title, [...notepads[i].notes]);
            new_notepads.push(new_notepad);
            count++;
        }
    }
    if (count == 0) {
        return notepads;
    } else {
        return new_notepads;
    }
}
