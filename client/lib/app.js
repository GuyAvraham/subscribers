angular.module('subscribers',['angular-meteor', 'ui.router', 'ngTagsInput'])
	.config(function (tagsInputConfigProvider) {
		tagsInputConfigProvider.setDefaults('tagsInput' , {
			minLength : 2, replaceSpacesWithDashes : false
		}).setDefaults('autoComplete', {minLength:2})
	});

//angular.module('subscribers',['angular-meteor', 'ui.router']);