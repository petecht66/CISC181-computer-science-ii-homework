/**
 * # Part 3) NotePad
 * We recommend you do this file third. If you haven't already done
 * person.ts, then go there first!
 *
 * 3.1 Create a class named `NotePad` that has a public string field `title` and a public field `notes` that is an array of strings.
 * 3.2. Create a NotePad constructor that takes in two parameters (title, notes) and assigns them to the appropriate fields.
 * 3.3. Create a NotePad method named `add` that takes in one string parameter (note) and adds it to the notes array, unless
 *      the string is empty.
 * 3.4. Create a NotePad method named `getNotes` that returns the notes array as a single string with each note
 *      separated by a new line.
 * 3.5. Create a NotePad method named 'getPriorityNotes' that returns all notes containing the word "priority" in the notes array, each
 *      separated by a new line. If there are no "priority" notes, return an empty string. HINT: you can use the `includes` method for strings.
 * 3.6. Create a NotePad method named `clone` that returns a new NotePad object with the same title and notes, but a separate
 *      copy of the notes array. This means that if you change the notes of the original notepad, the notes of the clone should not change.
 */

export class NotePad {
    public title: string;
    public notes: string[];
    constructor(title: string, notes: string[]) {
        this.title = title;
        this.notes = notes;
    }

    add(note: string) {
        if (note != "") {
            this.notes.push(note);
        }
        return this.notes;
    }

    getNotes() {
        if (this.notes.length == 0) {
            return "";
        }
        return this.notes.join("\n");
    }

    getPriorityNotes() {
        let count: number = 0;
        let new_notes: string[] = [];
        for (let i: number = 0; i < this.notes.length; i++) {
            if (this.notes[i].includes("priority")) {
                count += 1;
                new_notes.push(this.notes[i]);
            }
        }
        if (count == 0) {
            return "";
        } else {
            return new_notes.join("\n");
        }
    }

    clone() {
        let new_notes: string[] = [];
        for (let i: number = 0; i < this.notes.length; i++) {
            new_notes.push(this.notes[i]);
        }
        let new_notepad: NotePad = new NotePad(this.title, new_notes);
        return new_notepad;
    }
}
