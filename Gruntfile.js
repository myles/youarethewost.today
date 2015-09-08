module.exports = function(grunt) {
	grunt.initConfig({
		aws: grunt.file.readJSON('.aws.json'),
		slack: grunt.file.readJSON('.slack.json'),
		config: grunt.file.readYAML('_config.yml'),
	});

	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-slack-webhook');

	grunt.task.loadTasks('./tasks/');
};
