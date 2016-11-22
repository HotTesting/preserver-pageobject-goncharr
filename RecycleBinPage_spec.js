"use strict";

let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let RecycleBinPage = require('./pageObjects/RecycleBinPage.js').RecycleBinPage


let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Recycle bin function', function () {
    let notesPage = new NotesPage()
    let recycleBinPage = new RecycleBinPage()

    
    it('should be created when title and body provided', function () {
        browser.get(URL)
        browser.sleep(2000)
        notesPage.createNote('Test', 'Test')
        browser.sleep(2000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
   

    it('should be delete note', function () {
        //browser.get(URL)
        browser.sleep(2000)
        notesPage.deleteNoteButton()
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get('http://www.hiteshbalar.com/preserver/recycle-bin')
        browser.sleep(5000)
        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after deleted')
       
    })

    xit('should be restore note', function () {
        recycleBinPage.pushRestore()
        browser.sleep(5000)
        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after restored')
       
    })


    xit('should be delete note', function () {
        notesPage.deleteNoteButton()
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(`${URL}/recycle-bin`)
        browser.sleep(5000)
        expect(recycleBinPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after deleted')
       
    })



    it('should be delete forever', function () {
        browser.get(`${URL}/recycle-bin`)
        recycleBinPage.linkDelete()
        browser.sleep(2000)
        recycleBinPage.confirmDeleteButton()
        browser.sleep(2000)
        expect(recycleBinPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
        browser.get(URL)
        browser.sleep(5000)
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 1 after restored')
       
    })

})

    
    