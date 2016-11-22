"use strict";

let ArchivePage = require('./pageObjects/ArchivePage.js').ArchivePage
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage


let URL = 'http://www.hiteshbalar.com/preserver/'

describe('Archive function', function () {
    let archivePage = new ArchivePage()
    let notesPage = new NotesPage()

    
    xit('should be created when title and body provided', function () {
        browser.get(`${URL}/notes`)
        browser.sleep(2000)
        notesPage.createNote('Test', 'Test')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
   

    xit('should be archive note', function () {
        notesPage.archive()
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(`${URL}/archive-notes`)
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after archived')
       
    })

    xit('should be unarchive note', function () {
        archivePage.unarchive()
        browser.sleep(5000)
        expect(archivePage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after unarchived')
       
    })

})

    
    