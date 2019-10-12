const assert = require('assert');

const testUrl = 'http://localhost:3000/files';
const testUrlInner = 'http://localhost:3000/files/ShRI-2/tree/145c3a4/build';


describe('Скриншот тесты', () => {
    describe('Главная', () => {
        it('Хедер', function () {
        return this.browser
            .url(testUrl)
            .assertView('plain', '.header');
        });
        it('Табы', function () {
        return this.browser
            .url(testUrl)
            .assertView('plain', '.tabs');
        });
        it('Хлебные крошки', function () {
        return this.browser
            .url(testUrl)
            .assertView('plain', '.breadcrumbs');
        });
    });
    describe('Вложенная папка', () => {
        it('Хедер', function () {
        return this.browser
            .url(testUrlInner)
            .assertView('plain', '.header');
        });
        it('Табы', function () {
        return this.browser
            .url(testUrlInner)
            .assertView('plain', '.tabs');
        });
        it('Хлебные крошки', function () {
        return this.browser
            .url(testUrl)
            .assertView('plain', '.breadcrumbs');
        });
    });
});
