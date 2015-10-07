module.exports = function (grunt) {
	grunt.registerTask('run', [
		'jekyll:serve'
	]);
	
	grunt.registerTask('build', [
		'jekyll:build'
	]);
	
	grunt.registerTask('deploy', [
		// 'gitcommit:deploy',
		'clean',
		'jekyll:production',
		's3:build',
		'rsync:prod',
		'slack'
	]);
	
	grunt.registerTask('staging', [
		'jekyll:staging'
	]);
	
	grunt.registerTask('default', [
		'run'
	]);
};