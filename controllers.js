var appControllers = angular.module('appControllers', []);

appControllers.controller('navigationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.left = 'Left';
	$scope.right = 'Right';

	//Events

	$scope.changeLeft = function() {
		$rootScope.$broadcast('change-left', {color: 'primary'});
	};

	$scope.changeRight = function() {
		$rootScope.$broadcast('change-right', {color: 'danger'});
	};


}]);

appControllers.controller('pageCtrl', ['$scope', function($scope) {

	$scope.$on('change-left', function(event, args) {
		$scope.colorLeft = 'text-' + args.color;
	});

	$scope.$on('change-right', function(event, args) {
		$scope.colorRight = 'text-' + args.color;
	});
}]);
