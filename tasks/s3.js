module.exports = function (grunt) {
    var config = {
		options: {
			accessKeyId: "<%= aws.accessKeyId %>",
			secretAccessKey: "<%= aws.secretAccessKey %>",
			bucket: "youaretheworst.today"
		},
		build: {
			cwd: "build",
			src: "**"
		},
		podcasts: {
			cwd: "podcasts",
			src: "**",
			dest: "podcasts/"
		}
	};
    
    grunt.config.set('s3', config);
};
