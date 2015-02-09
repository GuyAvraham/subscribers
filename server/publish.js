/**
 * Created by guy on 2/3/15.
 */
Meteor.publish("allTags", function(){
	return Tags.find({});
})

Meteor.publish("myTags", function(){
	return UserTags.find();
})

Meteor.publish("posts", function(){
	return Posts.find();
})

// sync Tags list to new tags
UserTags.after.update(function (userId, doc) {
	doc.tags.forEach(function (tag) {
		if (Tags.find({'text' : tag.text}).count()===0) {
			Tags.insert({'text' : tag.text});
		}
	})
})

/*
Meteor.publish("myTags", function(){

	var currUser = Meteor.users.findOne({ _id : this.userId});
	console.log(currUser);
	console.log(currUser.tags);
	return currUser;
})*/
