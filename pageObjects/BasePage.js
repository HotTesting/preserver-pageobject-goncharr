"use strict";
let EC = protractor.ExpectedConditions

class BasePage {

    constructor() {
        this.noteFirst = this.getNotes().first()
        this.buttonDropdownMenu = $('.navbar-toggle .glyphicon-option-vertical')
    }
           
    getNotes() {
        return $$('.grid-container .grid-item')
    }


}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.BasePage = BasePage