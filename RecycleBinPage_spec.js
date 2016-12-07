"use strict";

let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let RecycleBinPage = require('./pageObjects/RecycleBinPage.js').RecycleBinPage


describe('Recycle bin function', function () {
    let notesPage = new NotesPage()
    let recycleBinPage = new RecycleBinPage()

    
    it('should be created when title and body provided', function () {
        browser.get(URL)
        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
   

    it('should be delete note', function () {
        browser.get(URL)
        notesPage.deleteNoteButton()
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('URL/recycle-bin')
        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after deleted')
       
    })

    xit('should be restore note', function () {
        recycleBinPage.pushRestore()
        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after restored')
       
    })


    xit('should be delete note', function () {
        notesPage.deleteNoteButton()
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('RL/recycle-bin')
        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after deleted')
       
    })



    fit('should be delete forever', function () {
        browser.get('/recycle-bin')
        recycleBinPage.linkDelete()
        recycleBinPage.confirmDeleteButton()
        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 1 after restored')
       
    })

})

    
    