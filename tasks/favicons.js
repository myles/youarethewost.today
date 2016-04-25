var path = require('path');

module.exports = function (grunt) {
	var config = {
		options: {
			trueColor: true,
			precompressed: true,
			appleTouchBackgroundColor: "#477dca",
			coast: true,
			windowsTile: true,
			tileBlackWhite: false,
			tileColor: "#477dca",
			appleTouchPadding: 0,
			firefox: true,
			androidHomescreen: true,
			html: 'source/_includes/favicons.html',
			HTMLPrefix: '/',
			indent: '',
			getLowResolutionImagePath: function (srcFilePath, size) {
				var extname = path.extname(srcFilePath);
				return path.join(path.dirname(srcFilePath), path.basename(srcFilePath, extname) + '.' + size + extname);
			}
		},
		icons: {
			src: 'source/_assets/images/favicon.png',
			dest: 'build/'
		}
	};

	grunt.config.set('favicons', config);
};
