module.exports = function (grunt) {
    var config = {
		options: {
			webhook: "<%= slack.webhook %>",
			channel: "<%= slack.channel %>",
			username: "<%= slack.username %>"
		},
		start_deploy: {
			text: "Starting to deploying YouAreTheWorst.Today",
			icon_emoji: ":hourglass_flowing_sand:"
		},
		finished_deploy: {
			text: "Deployed YouAreTheWorst.Today!",
			icon_emoji: ":thumbsup:"
		}
    };
    
    grunt.config.set('slack', config);
};
