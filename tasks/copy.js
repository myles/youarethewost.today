'use strict';

module.exports = function (grunt) {
    var config = {
        new_post: {
            files: [{
                src: ['source/_posts/*-theworst.markdown'],
                dest: 'source/_posts/<%= grunt.template.today("yyyy-mm-dd") %>-theworst.markdown',
                filter: 'isFile'
            }]
        }
    };

    grunt.config.set('copy', config);
};
