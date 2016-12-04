let EC = protractor.ExpectedConditions

class MenuFragment {
    constructor(navBarElem) {
        this.navBarElem = navBarElem
        this.menuElem = this.navBarElem.$('.dropdown.open .dropdown-menu')
        this.clickMyNotesLink = this.navBarElem.$('.dropdown-menu a[href*='/preserver/notes']')
        this.clickArchiveNotesLink = this.navBarElem.$('.dropdown-menu a[href*='/preserver/archive-notes']')
        this.clickRecycleBinLink = this.navBarElem.$('.dropdown-menu a[href*='/preserver/recycle-bin']')
        this.clickAboutLink = this.navBarElem.$('.dropdown-menu a[href*='/preserver/about']')
    }
