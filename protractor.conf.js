module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: '*_spec.js',
    directConnect: true
    baseUrl: 'http://www.hiteshbalar.com/preserver/',
    onPrepare: function () {
      
    	beforeEach(function () {
    	browser.get('URL')
        browser.sleep(200)
        browser.wait(EC.visibilityOf(notesPage.navbar.navBarElem), 1000, 'Header should be visible after page open')
        })
}