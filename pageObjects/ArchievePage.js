
class ArchievePage {

    constructor() {
        this.pushArchievNote = $('.btn.btn-link[title="Archieve"]')
        this.openNavMenu = $('.dropdown-toggle')
        this.selectArchieveNotes = $('.li:nth-child(3)>a')
        this.pushToUnarchieve = $('.btn-raised[title="Unarchive"]')
        this.deleteButtonNotes = $('.btn-raised[title="Delete"]')
    }

    createArchieve() {
        this.pushArchievNote .click()
        this.openNavMenu.click()
        this.selectArchieveNotes.click()
        findElement(by.css('.p>strong'))       
    }

    
    //Получим коллекцию всех заметок которые есть на этой странице
    getArchieve() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.ArchievePage = ArchievePage