var app = angular.module('outfittery-test', ['appControllers', 'ui.router']);

app.run(['$http', '$templateCache', function($templateCache, $http) {

}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('', 'page1');

	$stateProvider
		.state('page1', {
			url: "/page1",
			templateUrl: "page1.html",
			controller: "page1Ctrl"
		})
		.state('page2', {
			url: "/page2",
			templateUrl: "page2.html",
			controller: "page2Ctrl"
		})
		.state('page3', {
			url: "/page3",
			templateUrl: "page3.html",
			controller: "page3Ctrl"
		});

}]);
