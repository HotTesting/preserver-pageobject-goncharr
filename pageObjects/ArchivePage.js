"use strict";

class ArchivePage {

    constructor() {
        
        this.pushToUnarchive = $('.btn-raised[title="Unarchive"]')
        this.deleteButtonNotes = $('.btn-raised[title="Delete"]')
    }

    createUnarchive() {
        this.pushToUnarchive.click()
        //findElement(by.css('.p>strong'))       
    }

    
    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.ArchivePage = ArchivePage