import { House, buyHouses, findByOwner } from "../src/house";
import { Person} from "../src/person";

describe('House class', () => {
    describe('Constructor', () => {
        test('(1 pts) Create Instance', () => {
            const johnDoe = new Person('John', 'Doe', 20);
            expect(new House(johnDoe, '123 Main St')).toEqual({ owner: johnDoe, address: '123 Main St' });
            expect(new House(johnDoe, '456 Broadway')).toEqual({ owner: johnDoe, address: '456 Broadway' });

            const adaBart = new Person('Ada', 'Bart', 6);
            const house = new House(adaBart, '789 Elm St');
            expect(house).toEqual({ owner: adaBart, address: '789 Elm St' });
            house.address = '123 Main St';
            expect(house.address).toEqual('123 Main St');
        });
    });
});

describe('buyHouses', () => {
    test('(2 pts) Buy Houses', () => {
        const johnDoe = new Person('John', 'Doe', 20);
        const adaBart = new Person('Ada', 'Bart', 6);
        expect(buyHouses(johnDoe, ['123 Main St'])).toEqual([new House(johnDoe, '123 Main St')]);
        expect(buyHouses(adaBart, ['456 Broadway', '789 Elm St'])).toEqual([new House(adaBart, '456 Broadway'), new House(adaBart, '789 Elm St')]);
    });
    test('(1 pts) Empty Array', () => {
        const johnDoe = new Person('John', 'Doe', 20);
        expect(buyHouses(johnDoe, [])).toEqual([]);
    });
});

describe('findByOwner', () => {
    test('(3 pts) Find By Owner', () => {
        const johnDoe = new Person('John', 'Doe', 20);
        const adaBart = new Person('Ada', 'Bart', 6);
        const house1 = new House(johnDoe, '123 Main St');
        const house2 = new House(adaBart, '456 Broadway');
        const house3 = new House(adaBart, '789 Elm St');
        const houses = [house1, house2, house3];
        expect(findByOwner(houses, 'John Doe')).toEqual([house1]);
        expect(findByOwner(houses, 'Ada Bart')).toEqual([house2, house3]);
        expect(findByOwner(houses, 'Babbage Bart')).toEqual([]);

        expect(findByOwner([house1], 'John Doe')).toEqual([house1]);
        expect(findByOwner([house2], 'John Doe')).toEqual([]);

        expect(findByOwner([house1], 'Ada Bart')).toEqual([]);
        expect(findByOwner([house3], 'Ada Bart')).toEqual([house3]);
    });
    test('(1 pts) Empty Array', () => {
        const houses: House[] = [];
        expect(findByOwner(houses, 'John Doe')).toEqual([]);
    });
});