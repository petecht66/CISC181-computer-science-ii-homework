import {difference, celsiusToFahrenheit, whatToWear, pigLatin, getGradeMessage, circleArea, 
    parseTime, addIfPositive, chompString} from '../src/basic';

describe('celsiusToFahrenheit function', () => {
    test('(1 pts) 0 degrees celsius is 32 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(0)).toEqual(32);
    });

    test('(1 pts) 100 degrees celsius is 212 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(100)).toEqual(212);
    });

    test('(1 pts) -40 degrees celsius is -40 degrees fahrenheit', () => {
        expect(celsiusToFahrenheit(-40)).toEqual(-40);
    });
});

describe('addIfPositive function', () => {
    test('(1 pts) both positive', () => {
        expect(addIfPositive(1, 2)).toEqual(3);
    });

    test('(1 pts) both negative', () => {
        expect(addIfPositive(-1, -2)).toEqual(0);
    });

    test('(1 pts) one positive, one negative', () => {
        expect(addIfPositive(1, -2)).toEqual(0);
    });

    test('(1 pts) both zero', () => {
        expect(addIfPositive(0, 0)).toEqual(0);
    });
});

describe('difference function', () => {
    test('(1 pts) Positive Numbers', () => {
        expect(difference(1, 2)).toEqual(1);
        expect(difference(6, 4)).toEqual(2);
    });

    test('(1 pts) Negative Numbers', () => {
        expect(difference(-1, -2)).toEqual(1);
        expect(difference(-6, -4)).toEqual(2);
    });

    test('(1 pts) Mixed Numbers', () => {
        expect(difference(1, -2)).toEqual(3);
        expect(difference(-6, 4)).toEqual(10);
    });

    test('(1 pts) Zeros', () => {
        expect(difference(0, 0)).toEqual(0);
    });
});

describe('circleArea function', () => {
    test('(1 pts) radius 1', () => {
        expect(circleArea(1)).toEqual(Math.PI);
    });

    test('(1 pts) radius 2', () => {
        expect(circleArea(2)).toEqual(4 * Math.PI);
    });

    test('(1 pts) radius 3', () => {
        expect(circleArea(3)).toEqual(9 * Math.PI);
    });
});

describe('whatToWear function', () => {
    test('(1 pts) warm and sunny', () => {
        expect(whatToWear(80, 'sunny')).toEqual('t-shirt');
    });

    test('(1 pts) warm and not sunny', () => {
        expect(whatToWear(80, 'cloudy')).toEqual('sweater');
    });

    test('(1 pts) cold and sunny', () => {
        expect(whatToWear(40, 'sunny')).toEqual('jacket');
    });

    test('(1 pts) cold and not sunny', () => {
        expect(whatToWear(40, 'cloudy')).toEqual('jacket');
    });

    test('(1 pts) middle and sunny', () => {
        expect(whatToWear(60, 'sunny')).toEqual('sweater');
    });

    test('(1 pts) middle and not sunny', () => {
        expect(whatToWear(60, 'cloudy')).toEqual('sweater');
    });
});

describe('getGradeMessage function', () => {
    test('(1 pts) D or F', () => {
        expect(getGradeMessage('D')).toEqual('failing');
        expect(getGradeMessage('F')).toEqual('failing');
    });

    test('(1 pts) A, B, C', () => {
        expect(getGradeMessage('A')).toEqual('passing');
        expect(getGradeMessage('B')).toEqual('passing');
        expect(getGradeMessage('C')).toEqual('passing');
    });
});

describe('parseTime function', () => {
    test('(1 pts) midnight', () => {
        expect(parseTime('00:00')).toEqual(0);
    });

    test('(1 pts) 1am', () => {
        expect(parseTime('01:00')).toEqual(60);
    });

    test('(1 pts) noon', () => {
        expect(parseTime('12:00')).toEqual(12 * 60);
    });

    test('(1 pts) 1pm', () => {
        expect(parseTime('13:00')).toEqual(13 * 60);
    });

    test('(1 pts) 11:59pm', () => {
        expect(parseTime('23:59')).toEqual(23 * 60 + 59);
    });
});

describe('pigLatin function', () => {
    test('(1 pts) starts with vowel', () => {
        expect(pigLatin('apple')).toEqual('appleay');
        expect(pigLatin('elephant')).toEqual('elephantay');
    });

    test('(1 pts) starts with consonant', () => {
        expect(pigLatin('banana')).toEqual('ananabay');
        expect(pigLatin('dog')).toEqual('ogday');
    });

    test('(1 pts) starts with multiple consonants', () => {
        expect(pigLatin('cherry')).toEqual('herrycay');
        expect(pigLatin('three')).toEqual('hreetay');
    });

    test('(1 pts) starts with a y', () => {
        expect(pigLatin('yellow')).toEqual('ellowyay');
        expect(pigLatin('yes')).toEqual('esyay');
    });
});

describe('chompString function', () => {
    test('(1 pts) chomp empty string', () => {
        expect(chompString('', 'hello')).toEqual('hello');
    });

    test('(1 pts) chomp string', () => {
        expect(chompString('hello', 'hello world')).toEqual('world');
        expect(chompString('goto', 'goto space')).toEqual('space');
        expect(chompString('exit', 'exit')).toEqual('');
    });

    test('(1 pts) chomp string with no match', () => {
        expect(chompString('hello', 'goodbye world')).toEqual('goodbye world');
        expect(chompString('open', 'close the door')).toEqual('close the door');
    });
});