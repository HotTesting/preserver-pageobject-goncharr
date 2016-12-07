"use strict";
let BasePage = require('./BasePage.js').BasePage
let EC = protractor.ExpectedConditions

class NotesPage extends BasePage {

    constructor() {
        super()
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
        this.pushArchiveNotes = $('.btn.btn-link[title="Archive"]')
        this.pushDeleteNote = $('.btn-raised[title="Delete"]')
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

    archive() {
        this.pushArchiveNotes.click()
    }

    deleteNoteButton() {
        this.pushDeleteNote.click()
    }

    //Получим коллекцию всех заметок которые есть на этой странице
    // getNotes() {
    //     return $$('.grid-container .grid-item')
    // }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.NotesPage = NotesPage