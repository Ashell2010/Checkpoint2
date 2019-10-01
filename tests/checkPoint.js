var checkPoint
module.exports = {
    beforeEach: browser => {
        checkPoint = browser.page.checkObjects()
        checkPoint.navigate()
    },
    after: browser => {
        browser.end()
    },
    'evens and odds': browser => {
        checkPoint
            .setValue('@evenOddLine', '12,13,14,15,16')
            .click('@split')
            .assert.containsText('@evenResults', '12,14,16')
            .clearValue('@evenOddLine')
            .setValue('@evenOddLine', 'i shot the sheriff')
            .click('@split')
            .assert.containsText('@evenResults', '')
            .assert.containsText('@oddResult', 'null')
            

    },
    'filter Objects': browser => {
        checkPoint
            .click('@fLine')
            .setValue('@fLine', 'hairColor')
            .click('@filter')
            .assert.containsText('@fResults', '[ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue('@fLine')
            .setValue('@fLine', 'Sam')
            .click('@filter')
            .assert.containsText('@fResults', '')
            

            // Sting Filter
            .setValue('@sLine', 'James')
            .click('@sFilter')
            .assert.containsText('@sResults', 'James')
            .clearValue('@sLine')
            .setValue('@sLine', 'Tony')
            .click('@sFilter')
            .assert.containsText('@sResults', '')

            // Palindrome
            .setValue('@pLine', 'wow')
            .click('@pCheck')
            .assert.containsText('@pResults', 'true')
            .clearValue('@pLine')
            .setValue('@pLine', 'Redrum')
            .click('@pCheck')
            .assert.containsText('@pResults', 'false')
            // Sum
            .setValue('@fSum', '1000')
            .setValue('@sSum', '1001')
            .click('@vB')
            .assert.containsText('@sum', '2001')
            .clearValue('@sSum')
            .setValue('@sSum', '40043')
            .clearValue('@fSum')
            .setValue('@fSum', '40042')
            .click('@vB')
            .assert.containsText('@sum', '80085')
            .clearValue('@sSum')
            .clearValue('@fSum')
            .click('@vB')
            .assert.containsText('@sum', '0')
            .pause(2000)


    }
}
