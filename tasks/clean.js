'use strict';

module.exports = function (grunt) {
    var config = {
        build: ['./build/'],
        favicon_template: ['./source/_includes/favicons.html']
    };

    grunt.config.set('clean', config);
};
