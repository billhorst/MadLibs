var app = angular.module('plotGenerator', []);

app.controller('mlCtrl', function($scope) {
	$scope.gender = {};
	resetWords = function() {
		$scope.word = {
			properName: "",
			emotion: "",
			verb: "",
			animal: "",
			animal2: "",
			adjective: ""
		};
	};
	resetWords();
	$scope.genderExplanation = false;
	var malePropNames = randomWordArrays.malePropNameArray;
	var femalePropNames = randomWordArrays.femalePropNameArray;
	var emotions = randomWordArrays.emotionArray;
	var verbs = randomWordArrays.verbArray;
	var animals = randomWordArrays.animalArray;
	var animal2s = randomWordArrays.animalArray;
	var adjectives = randomWordArrays.adjectiveArray;

	//function to calculate random words
	calcRandomWord = function(nameArray) {
		return nameArray[Math.floor(Math.random()*nameArray.length)];
	}
	$scope.active = {
		fillingInWords: true
	};

	$scope.showHorror = function() {
		$scope.formComplete = true;
		if($scope.plotGeneratorForm.$valid && $scope.genderExplanation) {
			$scope.active = {};
			$scope.active.horrorStory = true;
		}
	}

	$scope.showAction = function() {
		$scope.formComplete = true;
		if($scope.plotGeneratorForm.$valid && $scope.genderExplanation) {
			$scope.active = {};
			$scope.active.actionStory = true;
		}
	}

	$scope.showSad = function() {
		$scope.formComplete = true;
		if($scope.plotGeneratorForm.$valid && $scope.genderExplanation) {
			$scope.active = {};
			$scope.active.sadStory = true;
		}
	}

	$scope.editWordList = function() {
		$scope.active = {};
		$scope.active.fillingInWords = true;
	}

	$scope.startNewPlotGenerator = function() {
		resetWords();
		$scope.active = {};
		$scope.gender = {};
		$scope.genderExplanation = false;
		$scope.formComplete = false;
		$scope.active.fillingInWords = true;
	}

	$scope.genRanWords = function() {
		//calculate random proper names based on gender choice
		if($scope.gender.gender === "male") {
			$scope.word.properName = calcRandomWord(malePropNames);
		} else if ($scope.gender.gender === "female") {
			$scope.word.properName = calcRandomWord(femalePropNames);
		}
		$scope.word.emotion = calcRandomWord(emotions);
		$scope.word.verb = calcRandomWord(verbs);
		$scope.word.animal = calcRandomWord(animals);
		//assigning second animal to animal2 while making sure it's not same animal as animal(1)
		do {
			$scope.word.animal2 = calcRandomWord(animals);
		}
		while ($scope.word.animal === $scope.word.animal2);
		$scope.word.adjective = calcRandomWord(adjectives);
	}

	$scope.genRanWord = function(wordToGen) {
		$scope.word[wordToGen] = calcRandomWord(eval(wordToGen+"s"));
	}

	$scope.genPropName = function() {
		// calculate random proper names based on gender choice
		if($scope.gender.gender === "male") {
			$scope.word.properName = calcRandomWord(malePropNames);
		} else if ($scope.gender.gender === "female") {
			$scope.word.properName = calcRandomWord(femalePropNames);
		}
	}

	$scope.fillInBlankWords = function(word) {
		for (var word in $scope.word) {
			alert(word);
		}
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
		$scope.genderExplanation = true;
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
		$scope.genderExplanation = true;
	}
})

.directive('plotGeneratorStory', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'plotGeneratorTemplate.html'
	}
})

.directive('fillInWords', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: 'wordList.html'
	}
})

.directive('buttonList', function() {
	return {
		restrict: 'E',
		templateUrl: 'buttonList.html'
	}
})

.directive('storiesView', function() {
	return {
		restrict: 'E',
		templateUrl: 'stories.html'
	}
})

.directive('inputBox', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'inputBox.html'
	}
})

.filter('capitalize', function() {
	return function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
});