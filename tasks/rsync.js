module.exports = function (grunt) {
	var config = {
		options: {
			args: ["--verbose"],
			recursive: true
		},
		staging: {
			options: {
				src: "./build/",
				dest: "/srv/www/youaretheworst.today/draft/html",
				host: "bear",
				port: "22",
				delete: true,
			}
		},
		production: {
			options: {
				src: "./build/",
				dest: "/srv/www/youaretheworst.today/www/html",
				host: "bear",
				port: "22",
				delete: true,
			}
		}
	};

	grunt.config.set('rsync', config);
};
