"use strict";

let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let BasePage = require('./pageObjects/BasePage.js').BasePage
let RecycleBinPage = require('./pageObjects/RecycleBinPage.js').RecycleBinPage
let MenuActionsFragment = require('./pageObjects/fragments/MenuActionsFragment.js').MenuActionsFragment



describe('Recycle bin function', function () {
    let notesPage = new NotesPage()
    let recycleBinPage = new RecycleBinPage()
    let menu = new MenuActionsFragment()
    let basePage = new BasePage()

    
    xit('should be deleted note ', function () {
        notesPage.createNote('Test', 'Test')
        recycleBinPage.deleteNote('successfully', 'notesPage')
        menu.openRecyleBinNotesPage()
        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Deleted notes count should be 1 after it was deleted')
    })
   

    it('should be deleted note forever', function () {
        notesPage.createNote('Test', 'Test')
        recycleBinPage.deleteNote('successfully', 'notesPage')
        //expect(notesPage.getNotes().count()).toBe(0,
        //    'Notes count should be 0')
        menu.openRecyleBinNotesPage()
        recycleBinPage.deleteNote('forever', 'recycleBinPage')
        //browser.pause()
        recycleBinPage.confirDelete()
        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Notes count should be 0 after deleted')
       
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



    xit('should be delete forever', function () {
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

    
    