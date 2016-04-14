module.exports = function (grunt) {
	var config = {
		options: {
			bundleExec: true,
			config: 'config/base.yml'
		},
		build: {
			options: {
				build: true
			}
		},
		serve: {
			options: {
				serve: true,
				auto: true
			}
		},
		staging: {
			options: {
				build: true,
				watch: true,
				config: 'config/base.yml,config/staging.yml',
				dest: '~/Sites/sites/www-youaretheworst-today/html/'
			}
		},
		production: {
			options: {
				build: true,
				debug: false,
				config: 'config/base.yml,config/production.yml'
			}
		}
	};

	grunt.config.set('jekyll', config);
};
