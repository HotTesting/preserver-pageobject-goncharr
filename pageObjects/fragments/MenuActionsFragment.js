let EC = protractor.ExpectedConditions
let MenuFragment = require('../fragments/MenuFragment.js').MenuFragment
let AboutPage = require('../AboutPage.js').AboutPage



class MenuActionsFragment {

    constructor() {
        this.navBarElem = $('.navbar')
        this.openMenuButton = this.navBarElem.$('.navbar-right a.dropdown-toggle')
        this.menu = new MenuFragment(this.navBarElem)
        this.profileCard = $('.profile-card')
        this.socialLinks = $('.profile-social-links')  
    }

    _openMenu() {
        this.openMenuButton.click()
        browser.wait(EC.elementToBeClickable(this.menu.menuElem), 2000 ,
         	'Menu should be present on the page after open')

        return this.menu
    }
    openMyNotesPage() {
    	this._openMenu().clickMyNotesLink()
    	// browser.wait(EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
     //     	'Open menu button should be visible after page open')
    }
    openArchiveNotesPage() {
    	this._openMenu().clickArchiveNotesLink()
    // 	browser.wait(EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000 ,
    //      	'Open menu button should be visible after page open')
    }
    openRecyleBinNotesPage() {
    	this._openMenu().clickRecycleBinLink()
    	browser.wait(EC.and(EC.presenceOf(this.openMenuButton), EC.elementToBeClickable(this.openMenuButton)), 2000,
         	'Open menu button should be visible after page open')
    }
    openAboutPage() {
    	this._openMenu().clickAboutLink()
        browser.wait(EC.and(EC.presenceOf(this.profileCard), EC.elementToBeClickable(this.socialLinks)), 3000,
            'Open menu button should be visible after page open')       
    }
}
//Exports this page object to use it in all other files
module.exports.MenuActionsFragment = MenuActionsFragment
