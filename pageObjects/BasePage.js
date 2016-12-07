"use strict";
let EC = protractor.ExpectedConditions

class BasePage {

    constructor() {
        this.noteFirst = this.getNotes().first()
        this.buttonDropdownMenu = $('.navbar-toggle .glyphicon-option-vertical')

        this.dropdownMenuMyNotes = $('.dropdown-menu a[href*="/preserver/notes"]')
        this.dropdownMenuArchiveMyNotes = $('.dropdown-menu a[href*="/preserver/archive-notes"]')
        this.dropdownMenuRecycleBin = $('.dropdown-menu a[href*="/preserver/recycle-bin"]')
        this.dropdownMenuAbout = $('.dropdown-menu a[href*="/preserver/about"]')

        this.dropdownMenuAbout = $('.dropdown-menu a[href*="/preserver/about"]')

    }
    

        
    getNotes() {
        return $$('.grid-container .grid-item')
    }
    

    //Получим коллекцию всех заметок которые есть на этой странице
    gоTo(menu = this.buttonDropdownMenu) {
        this.buttonDropdownMenu.click()
        browser.wait(EC.and(EC.presenceOf(menu), EC.visibilityOf(menu)),
            browser.params.customTimeout, 'Menu options button should be visible after page open')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.BasePage = BasePage