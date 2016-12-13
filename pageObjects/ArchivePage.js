"use strict";

class ArchivePage {

    constructor() {
        this.pushToUnarchive = $('.btn-raised[title="Unarchive"]')
        this.deleteButtonNotes = $('.btn-raised[title="Delete"]')
    }

    unarchive() {
        this.pushToUnarchive.click()
    }

    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Export this page object to use it in all other files
module.exports.ArchivePage = ArchivePage