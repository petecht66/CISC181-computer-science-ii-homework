import {NotePad, longestNotePad, duplicateNote, mergeNotes} from "../src/notepad";

describe('NotePad class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new NotePad('My Notes', [])).toEqual({ title: 'My Notes', notes: [] });
            expect(new NotePad('My Other Notes', [])).toEqual({ title: 'My Other Notes', notes: [] });
        });
        
        test('(1 pts) Two Notes', () => {
            const notePad = new NotePad('My Notes', ['This is a note.', 'This is another note.']);
            expect(notePad).toEqual({ title: 'My Notes', notes: ['This is a note.', 'This is another note.'] });
        });

        test('(1 pts) Instance Fields', () => {
            const notePad = new NotePad('My Notes', []);
            const notePad2 = new NotePad('My Other Notes', []);
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual([]);
            expect(notePad2.notes).toEqual([]);

            notePad.notes.push('This is a note.');
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual(['This is a note.']);
            expect(notePad2.notes).toEqual([]);

            notePad.notes.push('This is another note.');
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual(['This is a note.', 'This is another note.']);
            expect(notePad2.notes).toEqual([]);
        });
    });
});

describe("longestNotePad", () => {
    test("(3 pts) Longest NotePad", () => {
        const notePads = [
            new NotePad('My Notes', []),
            new NotePad('My Other Notes', [])
        ];
        expect(longestNotePad(notePads)).toBe('My Notes');

        notePads[0].notes.push('This is a note.');
        expect(longestNotePad(notePads)).toBe('My Notes');

        notePads[0].notes.push('This is another note.');
        expect(longestNotePad(notePads)).toBe('My Notes');

        notePads[1].notes.push('This is a longer note.');
        expect(longestNotePad(notePads)).toBe('My Notes');
        notePads[1].notes.push('This is a second, longer note.');
        expect(longestNotePad(notePads)).toBe('My Notes');

        notePads[1].notes.push('This is a third note. Now this is the longest.');
        expect(longestNotePad(notePads)).toBe('My Other Notes');
    });

    test("(1 pts) Empty Array", () => {
        const notePads: NotePad[] = [];
        expect(longestNotePad(notePads)).toBe('');
    });
});

describe("mergeNotes", () => {
    test("(3 pts) Merge Notes", () => {
        const notePads = [
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.'])
        ];
        expect(mergeNotes(notePads)).toEqual(new NotePad('Merged Notes', ['This is a note.', 'This is another note.', 'This is a longer note.', 'This is a second, longer note.']));

        expect(mergeNotes([new NotePad('First Third', [
            "I know what's going on here.", "I know what's going on here.", "Okay?", "I do."
        ]), new NotePad('Second Third', [
            "And if you want me to wander backstage to spill the beans", "I'm the only one out of the loop, it would seem.",
            "And if we check my point total here."
        ]), new NotePad("Third Third", [
            "I don't need to walk to the front, because I know what it is."
        ])])).toEqual(new NotePad('Merged Notes', [
            "I know what's going on here.", "I know what's going on here.", "Okay?", "I do.",
            "And if you want me to wander backstage to spill the beans", "I'm the only one out of the loop, it would seem.",
            "And if we check my point total here.", "I don't need to walk to the front, because I know what it is."
        ]));
    });

    test("(1 pts) Empty Array", () => {
        const notePads: NotePad[] = [];
        expect(mergeNotes(notePads)).toEqual(new NotePad('Merged Notes', []));

        const notePads2 = [
            new NotePad('My Notes', []),
            new NotePad('My Other Notes', [])
        ];
        expect(mergeNotes(notePads2)).toEqual(new NotePad('Merged Notes', []));
    });
});

/**
 * Having trouble with this one? 
 * http://tinyurl.com/visualize-deep-equality-js
 * This page has an example to help you visualize deep equality in JavaScript.
 * You need to remember to create a new instance of the array inside the new NotePad object!
 */
describe("duplicateNote", () => {
    test("(3 pts) Duplicate Note", () => {
        const notePads = [
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.'])
        ];
        expect(duplicateNote(notePads, 'My Notes')).toEqual([
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.'])
        ]);

        expect(duplicateNote(notePads, 'My Other Notes')).toEqual([
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.'])
        ]);

        expect(duplicateNote(notePads, 'My Third Notes')).toEqual([
            new NotePad('My Notes', ['This is a note.', 'This is another note.']),
            new NotePad('My Other Notes', ['This is a longer note.', 'This is a second, longer note.'])
        ]);
    });

    test("(3 pts) Verify Mutability", () => {
        const notePads = [
            new NotePad('First', ['Alpha', 'Beta']),
            new NotePad('Second', ['Gamma', 'Delta']),
            new NotePad('Third', ['Epsilon', 'Zeta']),
            new NotePad('Fourth', ['Eta', 'Theta'])
        ];
        const duplicated = duplicateNote(notePads, 'Third');
        // Check that it's not the same array
        expect(notePads).not.toStrictEqual(duplicated);
        // Check that the references inside are the same
        expect(notePads[0]).toStrictEqual(duplicated[0]);
        expect(notePads[1]).toStrictEqual(duplicated[1]);
        expect(notePads[2]).toStrictEqual(duplicated[2]);
        expect(notePads[3]).toStrictEqual(duplicated[4]);
        // EXCEPT for the duplicated element
        expect(notePads[3]).not.toStrictEqual(duplicated[3]);
        // Check that the notes are the same
        expect(notePads[0].notes).toStrictEqual(duplicated[0].notes);
        expect(notePads[1].notes).toStrictEqual(duplicated[1].notes);
        expect(notePads[2].notes).toStrictEqual(duplicated[2].notes);
        expect(notePads[3].notes).toStrictEqual(duplicated[4].notes);
        // EXCEPT for the duplicated element
        expect(notePads[3].notes).not.toStrictEqual(duplicated[3].notes);
    });

    test("(1 pts) Empty Array", () => {
        const notePads: NotePad[] = [];
        expect(duplicateNote(notePads, 'My Notes')).toEqual([]);
    });
});
