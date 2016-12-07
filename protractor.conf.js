module.exports.config = {
    useAllAngular2AppRoots: true,
    //specs: '*_spec.js',
    specs: 'NotesPage_spec.js',
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
    onPrepare: function () {

      //jasmine.getEnv().addReporter({})

        // Config for https://www.npmjs.com/package/jasmine-spec-reporter
        // let SpecReporter = require('jasmine-spec-reporter')
        // jasmine.getEnv().addReporter(new SpecReporter({
        //     displayStacktrace: 'specs',     // display stacktrace for each failed assertion, values: (all|specs|summary|none)
        //     displaySuccessesSummary: false, // display summary of all successes after execution
        //     displayFailuresSummary: false,  // display summary of all failures after execution
        //     displayPendingSummary: true,    // display summary of all pending specs after execution
        //     displaySuccessfulSpec: true,    // display each successful spec
        //     displayFailedSpec: true,        // display each failed spec
        //     displayPendingSpec: true,       // display each pending spec
        //     displaySpecDuration: true       // display each spec duration
        // }))

        // Config for https://www.npmjs.com/package/jasmine-console-reporter
        let JasmineConsoleReporter = require('jasmine-console-reporter')
        jasmine.getEnv().addReporter(new JasmineConsoleReporter({
            colors: 1,           // (0|false)|(1|true)|2
            cleanStack: 2,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4
            listStyle: 'indent', // "flat"|"indent"
            activity: false      // If your tests log extra data to console, this option should be disabled
}))
      
      beforeEach(function () {
      browser.get('')
      browser.sleep(5000)
      
    })
    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
            })
        })
    }
}