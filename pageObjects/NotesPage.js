
class NotesPage {

    constructor() {
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')
        this.pushArchiveNotes = $('.btn.btn-link[title="Archive"]')
        this.deleteNotes = $('.btn-raised[title="Delete"]')
    }

    //Создаст заметку на странице
    createNote(title, body) {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
    }

    createArchive() {
        this.pushArchiveNotes.click()
    }

    deleteNotes(){
        this.deleteNotes.click()
    }

    //Получим коллекцию всех заметок которые есть на этой странице
    getNotes() {
        return $$('.grid-container .grid-item')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.NotesPage = NotesPage