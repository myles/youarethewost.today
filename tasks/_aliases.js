module.exports = function (grunt) {

  grunt.registerTask('develop', [
    'jekyll:serve'
  ]);

  grunt.registerTask('build', [
		'clean',
    'jekyll:production'
  ]);

	grunt.registerTask('deploy', [
		'build',
		'rsync:staging'
	]);

  grunt.registerTask('deploy:production', [
		'build',
    'rsync:production'
  ]);

	grunt.registerTask('test', [
		'jekyll:build'
	]);

	grunt.registerTask('new_post', [
		'copy:new_post',
		'exec:new_post'
	]);

  grunt.registerTask('default', ['develop']);
};

