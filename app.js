var app = angular.module('madLibs', []);

app.controller('mlCtrl', function($scope) {
	$scope.word = {};
	$scope.active = {
		fillingInWords: true,
			// horrorStory: false,
			// actionStory: false,
			// sadStory: false,
			// inspirationalStory: false
		};
		// $scope.fillingInWords = true;

		$scope.showHorror = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.actionStory = false;
			// $scope.active.sadStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.horrorStory = true;
			}
		}

		$scope.showAction = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.sadStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.actionStory = true;
			}
		}

		$scope.showSad = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.actionStory = false;
			if($scope.madLibsForm.$valid) {
				$scope.active = {};
				$scope.active.sadStory = true;
			}
		}

		$scope.editWordList = function() {
			$scope.active = {};
			$scope.active.fillingInWords = true;
		}

		$scope.startNewMadLibs = function() {
			$scope.word = {};
			$scope.active = {};
			$scope.formComplete = false;
			$scope.active.fillingInWords = true;
		}

		$scope.genRanWords = function() {
			var propNameArray = ["Billy","Jimbo","Krzysztof","Vlad"];
			var emotionArray = ["happy","angry","cheery","jaded"];
			var verbArray = ["go","run","confront","cry"];
			var animalArray = ["dog","cat","monkey","drop bear"];

			$scope.word.properName = propNameArray[Math.floor(Math.random()*4)];
			$scope.word.emotion = emotionArray[Math.floor(Math.random()*4)];
			$scope.word.verb = verbArray[Math.floor(Math.random()*4)];
			$scope.word.animal = animalArray[Math.floor(Math.random()*4)];
		}

		// $scope.editWordListShowing = function() {
		// 	$scope.active.horrorStory = true;
		// 	$scope.active.fillingInWords = true;
		// }

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