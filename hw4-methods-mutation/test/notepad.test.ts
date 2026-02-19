import {NotePad} from "../src/notepad";

describe('NotePad class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            expect(new NotePad('My Notes', [])).toEqual({ title: 'My Notes', notes: [] });
            expect(new NotePad('My Other Notes', ["Get Milk"])).toEqual({ title: 'My Other Notes', notes: ["Get Milk"] });
        });
    });

    describe('add', () => {
        test('(1 pts) Add Note', () => {
            const notePad = new NotePad('My Notes', []);
            expect(notePad).toEqual({ title: 'My Notes', notes: [] });

            notePad.add('This is a note.');
            expect(notePad).toEqual({ title: 'My Notes', notes: ['This is a note.'] });

            notePad.add('This is another note.');
            expect(notePad).toEqual({ title: 'My Notes', notes: ['This is a note.', 'This is another note.'] });
        });

        test('(1 pts) Instance Fields', () => {
            const notePad = new NotePad('My Notes', []);
            const notePad2 = new NotePad('My Other Notes', []);
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual([]);
            expect(notePad2.notes).toEqual([]);

            notePad.add('This is a note.');
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual(['This is a note.']);
            expect(notePad2.notes).toEqual([]);

            notePad.add('This is another note.');
            expect(notePad.title).toBe('My Notes');
            expect(notePad2.title).toBe('My Other Notes');
            expect(notePad.notes).toEqual(['This is a note.', 'This is another note.']);
            expect(notePad2.notes).toEqual([]);
        });

        test('(1 pts) Add Empty Note', () => {
            const notePad = new NotePad('My Notes', ["Get Banana", "Take out Trash"]);
            notePad.add('');
            expect(notePad).toEqual({ title: 'My Notes', notes: ["Get Banana", "Take out Trash"] });
        });
    });

    describe('getNotes', () => {
        test('(1 pts) Get Notes', () => {
            const notePad = new NotePad('My Notes', []);
            expect(notePad.getNotes()).toBe('');

            notePad.add('This is a note.');
            expect(notePad.getNotes()).toBe('This is a note.');

            notePad.add('This is another note.');
            expect(notePad.getNotes()).toBe('This is a note.\nThis is another note.');

            notePad.add('This is a final note.');
            expect(notePad.getNotes()).toBe('This is a note.\nThis is another note.\nThis is a final note.');
        });
    });

    describe('getPriorityNotes', () => {
        test('(1 pts) Get Priority Notes', () => {
            const notePad = new NotePad('My Notes', []);
            expect(notePad.getPriorityNotes()).toBe('');

            notePad.add('This is a note.');
            expect(notePad.getPriorityNotes()).toBe('');

            notePad.add('This is another note.');
            expect(notePad.getPriorityNotes()).toBe('');

            notePad.add('This is a priority note.');
            expect(notePad.getPriorityNotes()).toBe('This is a priority note.');

            notePad.add('This is another priority note.');
            expect(notePad.getPriorityNotes()).toBe('This is a priority note.\nThis is another priority note.');

            notePad.add('This is a final note.');
            expect(notePad.getPriorityNotes()).toBe('This is a priority note.\nThis is another priority note.');

            notePad.add('This is a final priority note.');
            expect(notePad.getPriorityNotes()).toBe('This is a priority note.\nThis is another priority note.\nThis is a final priority note.');
        });
    });

    describe('clone', () => {
        test('(3 pts) Clone', () => {
            const notePad = new NotePad('My Notes', ["Get Milk", "Take out Trash"]);
            const notePad2 = notePad.clone();
            // Must be separate instances, with the same contents
            expect(notePad2).toEqual(notePad);
            expect(notePad2).not.toBe(notePad);
            // They have the same contents, but are different instances
            expect(notePad2.notes).not.toBe(notePad.notes);
            expect(notePad2.notes).toEqual(notePad.notes);
            // Should not modify original notePad
            notePad2.add('This is a note.');
            expect(notePad.getNotes()).toBe('Get Milk\nTake out Trash');
            expect(notePad2.getNotes()).toBe('Get Milk\nTake out Trash\nThis is a note.');
        });
    });

});
