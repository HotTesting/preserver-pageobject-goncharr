let EC = protractor.ExpectedConditions


class MenuActionsFragment {

    constructor() {
        this.navBarElem = $('.navbar')
        this.openMenuButton = this.navBarElem.$('.navbar-right a.dropdown-toggle')
        this.menu = new MenuFragment(this.navBarElem)   
    }


    _openMenu() {
        this.openMenuButton.click()
        browser.wait(EC.elementToBeClickable(this.menu.menuElem), 2000 ,
         	'Menu should be present on the page after open')

        return this.menu
    }
    openMyNotesPage {
    	this.openMenuButton.clickMyNotesLink()
    	browser.wait(EC.EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
         	'Open menu button should be visible after page open')
    }
    openArchiveNotesPage()() {
    	this.openMenuButton.clickArchiveNotesLink()
    	browser.wait(EC.EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
         	'Open menu button should be visible after page open')
    }
    openRecyleBinNotesPage() {
    	this.openMenuButton.clickRecycleBinLink()
    	browser.wait(EC.EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
         	'Open menu button should be visible after page open')
    }
    openAboutPage() {
    	this.openMenuButton.clickAboutLink()
    	browser.wait(EC.EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
         	'Open menu button should be visible after page open')
    }

module.exports.MenuActionsFragment = MenuActionsFragment
