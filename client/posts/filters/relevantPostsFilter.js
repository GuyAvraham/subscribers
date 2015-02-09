/**
 * Created by guy on 2/8/15.
 */
angular.module("subscribers").filter('relevantPosts', function () {
	return function (posts, userTags) {
		if (!userTags){
			console.log("onFilter posts, UserTags undefiend");
			return false;
		}

		return _.filter(posts, function(post){
			var myTagsArr = _.pluck(userTags.tags, 'text');
			var postTags = _.pluck(post.tags, 'text');
			if (_.intersection(myTagsArr, postTags).length !==0)return true;
			//if (post.tags.find({'text': { $in: myTagsArr}}).fetch().length !== 0) return true;
			else {
				return false;
			}
		})
	}
})