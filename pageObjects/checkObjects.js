module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddLine: '[name="evenOddInput"]',
        oddResult: '[name="oddResults"]',
        split: '[name="evenOddButton"]',
        evenResults: '[name="evenResults"]',
        // filter objects
        fLine: '[name="objectFilterInput"]',
        filter: '[name="objectFilterButton"]',
        fResults: '[name="objectFilterResults"]',
        // palindromeInput
        pLine: '[name="palindromeInput"]',
        pCheck: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        pResults: '[name="palindromeResults"]',

        // string filter
        sLine: {
            selector: '//input[@id="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
        sFilter: {
            selector: '//button[@id="nameFilterButton"]',
            locateStrategy: 'xpath'
        },
        sResults: {
            selector: '//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
        // sum inputs
        fSum: '[name="sumInput1"]',
        sSum: '[name="sumInput2"]',
        vB: '[name="sumButton"]',
        sum: '[name="sumResults"]',
        //  cancelBtn: {
        //      selector: '//button[@name="cancel"]',
        //      locateStrategy: 'xpath'
        //  }

    }
}