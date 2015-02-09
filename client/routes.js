angular.module("subscribers").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);
        $stateProvider
            .state('subscribeTags', {
                url: '/subscribeTags',
                templateUrl: 'client/posts/views/subscribeToTags.tpl',
                controller: 'subscribeToTagsCtrl'
            })
	        .state('newPost', {
		        url: '/newPost',
		        templateUrl: 'client/posts/views/newPost.tpl',
		        controller: 'newPostCtrl'
	        }).state('home', {
		        url: '/home',
		        templateUrl : 'client/home.tpl'
		        })
        ;
        $urlRouterProvider.otherwise("/home");
    }]);
