var app = angular.module('madLibs', []);
	
	app.controller('mlCtrl', function($scope) {
		$scope.active = {
			fillingInWords: true,
			// horrorStory: false,
			// actionStory: false,
			// sadStory: false,
			// inspirationalStory: false
		};
		// $scope.fillingInWords = true;

		$scope.showHorror = function() {
			// $scope.active.fillingInWords = false;
			// $scope.active.actionStory = false;
			// $scope.active.sadStory = false;
			$scope.active = {};
			$scope.active.horrorStory = true;
		}

		$scope.showAction = function() {
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.sadStory = false;
			$scope.active = {};
			$scope.active.actionStory = true;
		}

		$scope.showSad = function() {
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.actionStory = false;
			$scope.active = {};
			$scope.active.sadStory = true;
		}
	})

	.directive('madLibsStory', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'madLibsTemplate.html'
		}
	})

	.directive('fillInWords', function() {
		return {
			restrict: 'E',
			transclude: false,
			templateUrl: 'wordList.html'
		}
	})