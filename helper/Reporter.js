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
            colors: 2,           // (0|false)|(1|true)|2
            cleanStack: 2,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4
            listStyle: 'indent', // "flat"|"indent"
            activity: false      // If your tests log extra data to console, this option should be disabled
}))