"use strict";
let BasePage = require('./BasePage.js').BasePage

class AboutPage extends BasePage {

    constructor() {
    	super()
        this.backToNotes = $('.li:first-child"')
        this.linkToIconTwitter = $('.a[href^="https://twitter.com/Hsbalar"]')
        this.linkToIconGithub= $('.a[href^="https://github.com/hsbalar/Preserver"]')
    }
    iconTwitter() {
        this.linkToIconTwitter()
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.AboutPage = AboutPage