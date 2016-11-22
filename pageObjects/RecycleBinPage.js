"use strict";

class RecycleBinPage {

    constructor() {
        
        this.restoreNote = $('.btn-raised[title="Restore"]')
        this.deleteForeverNote = $('.btn-raised[title="Delete forever"]')
        this.buttonToDelete = $('.grid-container [title~=Delete]')
    }

    pushRestore() {
        this.restoreNote.click()
        
    }

    pushDeleteForever() {
        this.deleteForeverNote.click()
        
    }

    pushDeleteButton() {
        this.buttonToDelete.click()
        
    }




    
    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.RecycleBinPage = RecycleBinPage