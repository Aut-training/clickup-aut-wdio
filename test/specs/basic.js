const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://clickup.com/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'ClickUp™ | One app to replace them all')
    })
})