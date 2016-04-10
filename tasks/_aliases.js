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
    'rsync:prod',
    's3:build'
  ]);

  grunt.registerTask('staging', [
    'jekyll:staging'
  ]);

  grunt.registerTask('default', [
    'run'
  ]);
};

