"use strict";
let NotesPage = require('./NotesPage.js').NotesPage
let BasePage = require('./BasePage.js').BasePage
let MenuActionsFragment = require('./fragments/MenuActionsFragment.js').MenuActionsFragment
let EC = protractor.ExpectedConditions


class RecycleBinPage extends NotesPage {

    constructor() {
        super()
        this.restoreNote = $('.btn-raised[title="Restore"]')
        this.confrButtonDelete = $('.grid-container [title~=Delete]')
        this.iconDeleteNote = $('.btn-raised[title="Delete"]')
        this.iconDeleteRecycleBin = $('.btn-raised[title="Delete forever"]')
        this.delFromRecycleBin = $('[data-dismiss="modal"].btn-default')
        
    }

    pushRestore() {
        browser.actions().mouseMove(this.noteFirst).perform()
        this.restoreNote.click()
        browser.wait(EC.presenceOf(this.notificationSuccess), 5000,
            'Suuccess notification should be visible after note delete')
    }

    //Delete note forever
    confirDelete () {
        this.confrButtonDelete.click()
         browser.wait(EC.elementToBeClickable(this.confrButtonDelete), 5000,
            'Delete button inside the modal window should be clickable')
    }

    getDeleteBtn (pageName){
        if(pageName == 'notesPage'){
            return this.iconDeleteNote
        }

        if(pageName == 'recycleBinPage'){
            return this.iconDeleteRecycleBin
        }
    }

    //Delete a note on the page
    deleteNote(status, pageName) {
        browser.actions().mouseMove(this.noteFirst).perform()
        console.log(pageName)
        this.getDeleteBtn(pageName).click()
        
        if (status === 'successfully') {
            browser.wait(EC.presenceOf(this.notificationSuccess), 5000,
            'Success notification should be visible after note delete')
        } else if (status === 'forever') {
            browser.wait(EC.elementToBeClickable(this.iconDeleteRecycleBin), 5000,
            'Should be call modal window')
        }
    }
}

// Export this page object to use it in all other files
module.exports.RecycleBinPage = RecycleBinPage