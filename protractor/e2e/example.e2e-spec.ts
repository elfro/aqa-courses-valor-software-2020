import {browser} from 'protractor';

describe('Test', function () {
    it('should passed', async () => {
        await browser.get('/');
        expect(true).toBe(true);
    });

    it('should failed', async () => {
        await browser.get('/');
        expect(true).toBe(false);
    });
});
