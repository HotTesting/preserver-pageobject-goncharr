let EC = protractor.ExpectedConditions

class MenuFragment  {
    constructor(navBarElem) {

        this.menuElem = navBarElem.$('.dropdown.open .dropdown-menu')
        this.myNotesLinkElement = this.menuElem.$('.dropdown-menu a[href*="/preserver/notes"]')
        this.archiveNotesLinkElement = this.menuElem.$('.dropdown-menu a[href*="/preserver/archive-notes"]')
        this.recycleBinLinkElement = this.menuElem.$('.dropdown-menu a[href*="/preserver/recycle-bin"]')
        this.aboutLinkElement = this.menuElem.$('.dropdown-menu a[href*="/preserver/about"]')
    }

    clickMyNotesLink() {
    	this.myNotesLinkElement.click()
    }
    clickArchiveNotesLink () {
    	this.archiveNotesLinkElement.click()
    }
    clickRecycleBinLink() {
    	this.recycleBinLinkElement.click()
    }
    clickAboutLink() {
    	this.aboutLinkElement.click()
    }
}
module.exports.MenuFragment = MenuFragment    
