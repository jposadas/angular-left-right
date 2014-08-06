var app = angular.module('outfittery-test', ['appControllers', 'ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('', 'page1');

	$stateProvider
		.state('page1', {
			url: "/page1",
			templateUrl: "page1.html",
			controller: "pageCtrl"
		})
		.state('page2', {
			url: "/page2",
			templateUrl: "page2.html",
			controller: "pageCtrl"
		})
		.state('page3', {
			url: "/page3",
			templateUrl: "page3.html",
			controller: "pageCtrl"
		});

}]);
