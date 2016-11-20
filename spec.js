let ArchievePage = require('./pageObjects/ArchievePage.js').ArchievePage

let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Archieve function', function () {
    //let ArchievePage = new ArchievePage()

    beforeEach(function () {
      browser.get(URL)
      browser.sleep(9000)

      
    })

   

    it('should be unarchieve note', function () {
        
        ArchievePage.createArchieve
        browser.sleep(9000)
       // expect(ArchievePage.getArchieve().count()).toBe(1,
       //     'Notes count should be 1 after created')
    })

})

    
    