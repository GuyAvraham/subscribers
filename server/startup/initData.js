/**
 * Created by guy on 2/2/15.
 */
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Posts.find().count() === 0) {
            Posts.insert({'content': 'post num 1', 'tags': ['home clean', 'security']});
            Posts.insert({'content': 'post 2 second', 'tags': ['ux', 'ui', 'designer']});
        }

        //Tags.remove({});
        if (Tags.find().count() === 0) {
            ['home clean', 'security', 'ux', 'ui', 'designer'].forEach(function (t) {Tags.insert({'text': t})});
        }

	    var createUserTagStub = function(user) {
		    UserTags.insert({"userId" : user._id, "mail" : user.emails[0].address , "tags" : [{"text" : "Example tag"}]});
	    }

	    Meteor.users.find({}).fetch().forEach(function (user) {
		    if (UserTags.find({"userId" : user._id}).count()===0) {
				createUserTagStub(user);
		    }
	    })

	    Accounts.onCreateUser(function(options, user) {
		    createUserTagStub(user);
		    return user;
	    });


    });


}