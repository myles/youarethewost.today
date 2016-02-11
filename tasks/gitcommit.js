module.exports = function (grunt) {
	var config = {
		deploy: {
			options: {
				message: "Deploying : "
			},
			files: [{
				src: ["."]
			}]
		}
	};

	grunt.config.set('gitcommit', config);
};
