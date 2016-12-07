"use strict";
let BasePage = require('./BasePage.js').BasePage


class AboutPage extends BasePage {

    constructor() {
    	super()
        this.backToNotes = $('.li:first-child"')
        this.iconTwitter = $('.a[href^="https://twitter.com/Hsbalar"]')
        this.iconGithub= $('.a[href^="https://github.com/hsbalar/Preserver"]')
    }

     
   
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.AboutPage = AboutPage