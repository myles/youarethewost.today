module.exports = function (grunt) {
	grunt.registerTask('run', [
		'jekyll:serve'
	]);
	
	grunt.registerTask('build', [
		'jekyll:build'
	]);
	
	grunt.registerTask('deploy', [
		'clean',
		'jekyll:production',
		's3:build',
		'rsync:prod'
	]);
	
	grunt.registerTask('staging', [
		'jekyll:staging'
	]);
	
	grunt.registerTask('default', [
		'run'
	]);
};