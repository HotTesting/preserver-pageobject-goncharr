"use strict";

let MenuActionsFragment = require('./pageObjects/fragments/MenuActionsFragment.js').MenuActionsFragment

class BasePage {

    constructor() {
        super()
        this.backToNotes = $('.a[href*="/preserver/notes"')
        this.iconTwitter = $('.a[href^="https://twitter.com/Hsbalar"]')
        this.iconGithub= $('.a[href^="https://github.com/hsbalar/Preserver"]')
    }

     
   
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.AboutPage = AboutPage