module.exports = function(grunt) {
	grunt.initConfig({
		aws: grunt.file.readJSON('.aws.json'),
		config: grunt.file.readYAML('config/base.yml'),
	});

	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.task.loadTasks('./tasks/');
};
