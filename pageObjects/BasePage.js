"use strict";
let EC = protractor.ExpectedConditions

class BasePage {

    constructor() {
        this.noteFirst = this.getNotes().first()
        this.buttonDropdownMenu = $('.navbar-toggle .glyphicon-option-vertical')
        this.notificationSuccess = $('.notes-notifications.success')
    }
           
    getNotes() {
        return $$('.grid-container .grid-item')
    }


}

// Export this page object to use it in all other files
module.exports.BasePage = BasePage