const assert = require('assert');

const testUrl = 'http://localhost:3000/files';
const testUrlInner = 'http://localhost:3000/files/ShRI-2/tree/145c3a4/build';

describe('Переходы по ссылкам', () => {
    it('Переход во вложенную папку', function() {
        return this.browser
        .url(testUrl)
        .pause(5000)
        .click('a[href="/files/ShRI-2/tree/145c3a4/build"]')
        .pause(5000)
        //.assertExists('.content ul', 'Нет списка файлов')
        .assertUrl(testUrlInner, 'Ссылка не совпадает')
    });
});