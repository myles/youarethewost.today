module.exports = function (grunt) {
	var config = {
		encrypt: {
			cmd: 'gpg --encrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json.gpg .aws.json'
		},
		decrypt: {
			cmd: 'gpg --decrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json .aws.json.gpg'
		},
		new_post: {
			cmd: 'mate source/_posts/<%= grunt.template.today("yyyy-mm-dd") %>-theworst.markdown'
		}
	};

	grunt.config.set('exec', config);
};
