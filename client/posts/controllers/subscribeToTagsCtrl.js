angular.module("subscribers").controller("subscribeToTagsCtrl",
	['$scope', '$meteorCollection', '$meteorObject', '$rootScope', '$meteorMethods', '$q', '$meteorSubscribe',
		function ($scope, $meteorCollection, $meteorObject, $rootScope, $meteorMethods, $q, $meteorSubscribe) {

			var setMyTags = function () {
				var a = UserTags.findOne({"userId": Meteor.userId()});
				if (a) {
					console.log("UserTags = "); console.log(a);
					$scope.myTags = $meteorObject(UserTags, a._id, true);
				} else {
			        console.log(Meteor.userId() + " no user tag " + UserTags.find({"userId": Meteor.userId()}).count());
				}
			}

			console.log("controller restarted");
			setMyTags();

			Accounts.onLogin(function () {
				console.log("Account.onLogin");
				setMyTags();
			})

			$scope.allTags = $meteorCollection(Tags, false).subscribe('allTags');
			$scope.allPosts = $meteorCollection(Posts, false).subscribe('posts');

			$scope.loadTags = function () {
				var deferred = $q.defer();
				deferred.resolve($scope.allTags);
				return deferred.promise;
				//return $meteorSubscribe.subscribe('allTags');
				// must return a promise. todo: maybe use subscribe?
			};
		}]);
