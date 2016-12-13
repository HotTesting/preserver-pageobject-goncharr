"use strict";
let BasePage = require('./BasePage.js').BasePage

class AboutPage extends BasePage {

    constructor() {
    	super()
        this.backToNotes = $('li:first-child')
        this.iconTwitter = $('a[href^="https://twitter.com/Hsbalar"]')
        this.iconGithub = $('a[href^="https://github.com/hsbalar/Preserver"]')
    }

}

// Export this page object to use it in all other files
module.exports.AboutPage = AboutPage