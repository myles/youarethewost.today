'use strict';

module.exports = function (grunt) {
    var config = {
        new_post: {
            cmd: 'mate source/_posts/<%= grunt.template.today("yyyy-mm-dd") %>-theworst.markdown'
        }
    };

    grunt.config.set('exec', config);
};
