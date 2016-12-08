"use strict";

let ArchivePage = require('./pageObjects/ArchivePage.js').ArchivePage
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage


describe('Archive function', function () {
    let archivePage = new ArchivePage()
    let notesPage = new NotesPage()
    
    
    it('should be created when title and body provided', function () {
        browser.get('/notes')
        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
   

    xit('should be archive note', function () {
        notesPage.archive()
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('/archive-notes')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after archived')
       
    })

    xit('should be unarchive note', function () {
        archivePage.unarchive()
        expect(archivePage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after unarchived')
       
    })

})

    
    