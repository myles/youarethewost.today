module.exports = function (grunt) {
	var config = {
		options: {
			webhook: "<%= slack.webhook %>",
			channel: "<%= slack.channel %>",
			username: "<%= slack.username %>",
			icon_emoji: "<%= slack.icon_emoji %>"
		},
		deploy: {
			text: "Just deployed YourAreTheWorst.Today!"
		}
	};

	grunt.config.set('slack', config);
};
