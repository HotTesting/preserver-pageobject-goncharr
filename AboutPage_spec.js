"use strict";

let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let AboutPage = require('./pageObjects/AboutPage.js').AboutPage
let MenuActionsFragment = require('./pageObjects/fragments/MenuActionsFragment.js').MenuActionsFragment
let MenuFragment = require('./pageObjects/fragments/MenuFragment.js').MenuFragment


describe('About page tests', function () {
    let aboutPage = new AboutPage()
    let notesPage = new NotesPage()

    it('should be review Back to notes link, Twitter, GitHub icons', function () {
        aboutPage.openMenu()
        console.log(aboutPage.openMenu)
        browser.sleep(5000)
        //expect(notesPage.getNotes().count()).toBe(1,
        //    'Notes count should be 1 after created')
    })
})