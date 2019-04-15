import Mustache from 'mustache';
import moment from 'moment';
import '../index';

describe('Test Mustache', () => {
    test('It renders simple text', () => {
        const template = 'Hello {{person}}';
        const context = {
            person: 'World'
        };
        const result = Mustache.render(template, context);
        expect(result).toBe('Hello World');
    });

    test('It calls a simple formatter', () => {
        Mustache.Formatters = {
            "uppercase": function (str) {
                return str.toUpperCase();
            }
        };
        const template = 'Hello {{person | uppercase}}';
        const context = {
            person: 'World'
        };
        expect(Mustache.render(template, context)).toBe('Hello WORLD');
    })

    test('It calls a date formatter', () => {
        Mustache.Formatters = {
            "date": function (dateStr, format) {
                const date = moment(dateStr);
                return date.format(format);
            }
        };
        const template = 'Hello on {{start | date : "DD MMMM YYYY"}}';
        const context = {
            start: '2019-04-14T10:20:33'
        };
        expect(Mustache.render(template, context)).toBe('Hello on 14 April 2019');
    })
});