"use strict";
let BasePage = require('./BasePage.js').BasePage
let EC = protractor.ExpectedConditions

class NotesPage extends BasePage {

    constructor() {
        super()
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
        this.pushArchiveNotes = $('.btn.btn-link[title="Archive"]')
       
    }
    baseNote(title = '', body = '') {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
    }
    //Create a note on the page
    createNote(title = '', body = '') {
        this.baseNote(title, body)
        browser.wait(EC.elementToBeClickable(this.noteFirst, 5000))
    }
    //Archive a note on the page
    archive() {
        this.pushArchiveNotes.click()
    }
    
}

// Export this page object to use it in all other files
module.exports.NotesPage = NotesPage