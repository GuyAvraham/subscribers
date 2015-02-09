/**
 * Created by guy on 2/2/15.
 */
Posts = new Mongo.Collection("posts");
Tags = new Mongo.Collection("tags");
UserTags = new Mongo.Collection("userTags");
/*
Meteor.users.allow({
	update: function (userId, doc) {
		if (userId !== doc._id)
			return false;

		return true;
	}
})*/

