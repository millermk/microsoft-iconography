const { taskPresets, task } = require('just-scripts');
const fs = require('fs-extra');

taskPresets.webapp();

task('copystatic', function() {
    fs.copySync('public/static', 'dist/public/static', {
        dereference: true
    });
});
