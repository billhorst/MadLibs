var app = angular.module('madLibs', []);

app.controller('mlCtrl', function($scope) {
	$scope.gender = {};
	$scope.word = {};
	$scope.genderChosen = false;
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
			if($scope.madLibsForm.$valid && $scope.genderChosen) {
				$scope.active = {};
				$scope.active.horrorStory = true;
			}
		}

		$scope.showAction = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.sadStory = false;
			if($scope.madLibsForm.$valid && $scope.genderChosen) {
				$scope.active = {};
				$scope.active.actionStory = true;
			}
		}

		$scope.showSad = function() {
			$scope.formComplete = true;
			// $scope.active.fillingInWords = false;
			// $scope.active.horrorStory = false;
			// $scope.active.actionStory = false;
			if($scope.madLibsForm.$valid && $scope.genderChosen) {
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
			var malePropNameArray = ["Edwin","Mike","Bob Lough","Jay"];
			var femalePropNameArray = ["Katrina","Carrie","Jacqueline","Sonja"];
			var emotionArray = ["happy","angry","cheery","jaded"];
			var verbArray = ["go","run","confront","cry"];
			var animalArray = ["dog","cat","monkey","drop bear","zebra","flying fish"];

			if($scope.gender.gender === "male") {
				$scope.word.properName = malePropNameArray[Math.floor(Math.random()*malePropNameArray.length)];
			} else if ($scope.gender.gender === "female") {
				$scope.word.properName = femalePropNameArray[Math.floor(Math.random()*femalePropNameArray.length)];
			}
			$scope.word.emotion = emotionArray[Math.floor(Math.random()*emotionArray.length)];
			$scope.word.verb = verbArray[Math.floor(Math.random()*verbArray.length)];
			$scope.word.animal = animalArray[Math.floor(Math.random()*animalArray.length)];
			do {
				$scope.word.animal2 = animalArray[Math.floor(Math.random()*animalArray.length)];
				console.log($scope.word.animal+$scope.word.animal2);
			}
			while ($scope.word.animal === $scope.word.animal2);
		}

		$scope.setGenderMale = function() {
			$scope.gender = {
				gender: "male",
				noun: "boy",
				subj: "he",
				obj: "him",
				possDet: "his",
				possPro: "his",
				reflexive: "himself"
			}
			$scope.genderChosen = true;
		}

		$scope.setGenderFemale = function() {
			$scope.gender = {
				gender: "female",
				noun: "girl",
				subj: "she",
				obj: "her",
				possDet: "her",
				possPro: "hers",
				reflexive: "herself"
			}
			$scope.genderChosen = true;
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

.filter('capitalize', function() {
	return function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
});