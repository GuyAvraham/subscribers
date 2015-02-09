/**
 * Created by guy on 2/8/15.
 */
angular.module("subscribers").controller("newPostCtrl",
	['$scope', '$meteorCollection', '$meteorObject', '$rootScope', '$meteorMethods', '$q', '$meteorSubscribe',
		function ($scope, $meteorCollection, $meteorObject, $rootScope, $meteorMethods, $q, $meteorSubscribe) {

			$scope.newPost = { 'tags': [{'text' : 'remove me'}], 'publisher' : 1 };
			$scope.saveNewPost = function () {
				console.log('saveNewPost');  console.log($scope.newPost);
				$scope.newPost.publisher = Meteor.userId();
				Posts.insert($scope.newPost);

			}

			$scope.allTags = $meteorCollection(Tags, false).subscribe('allTags');
			$scope.allPosts = $meteorCollection(Posts, false).subscribe('posts');
			$scope.loadTags = function () {
				var deferred = $q.defer();
				deferred.resolve($scope.allTags);
				return deferred.promise;
			};
		}
	]);

