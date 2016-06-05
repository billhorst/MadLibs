var app = angular.module('plotGenerator', ['filters', 'directives']);

app.controller('mlCtrl', function($scope) {
	$scope.gender = {};
	resetWords = function() {
		$scope.word = {
			properName: "",
			emotion: "",
			verb: "",
			animal: "",
			animal2: "",
			adjective: "",
			adjective2: ""
		};
	};
	resetWords();
	$scope.genderExplanation = false;

	var animals = randomWordArrays.animalArray;
	var animal2s = randomWordArrays.animalArray;
	var adjectives = randomWordArrays.adjectiveArray;
	var adjective2s = randomWordArrays.adjectiveArray;
	var nouns = randomWordArrays.nounArray;
	var noun2s = randomWordArrays.nounArray;
	var pluralNoun2s = randomWordArrays.pluralNounArray;

	$scope.active = {
		fillingInWords: true,
		showIntro: true
	};

	$scope.endIntro = function() {
		$scope.active.showIntro = false;
	}

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

	$scope.showSciFi = function() {
		$scope.formComplete = true;
		if($scope.plotGeneratorForm.$valid && $scope.genderExplanation) {
			$scope.active = {};
			$scope.active.sciFiStory = true;
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
		// calculate random proper names based on gender choice
		if($scope.gender.gender === "male") {
			$scope.word.properName = getRandomMaleName();
		} else if ($scope.gender.gender === "female") {
			$scope.word.properName = getRandomFemaleName();
		}

		// calculate standard words (no doubles, no plurals)
		$scope.word.emotion = getRandomEmotion();
		$scope.word.verb = getRandomVerb();
		$scope.word.city = getRandomCity();
		$scope.word.country = getRandomCountry();
		$scope.word.maleName = getRandomName();
		$scope.word.area = getRandomArea();
		$scope.word.ingVerb = getRandomIngVerb();
		$scope.word.number2_10 = getRandomNumber(2,10);
		
		// calculate more than one word from the same array
		// calculate two different adjectives
		$scope.word.adjective = getRandomAdjective();
		do {
			$scope.word.adjective2 = getRandomAdjective();
		} while ($scope.word.adjective == $scope.word.adjective2);

		// calculate more than two words that also have plural forms
		// calculate singular and plural animal 1
		var animalPair = getRandomAnimalPair();
		$scope.word.animal = animalPair[0];
		$scope.word.pluralAnimal = animalPair[1];
		// calculate singular and plural animal 2
		do {
			var animalPair2 = getRandomAnimalPair();
			$scope.word.animal2 = animalPair2[0];
			$scope.word.pluralAnimal2 = animalPair2[1];
		} while (animalPair[0] === animalPair2[0]);

		// calculate singular and plural noun 1
		var nounPair = getRandomNounPair();
		$scope.word.noun = nounPair[0];
		$scope.word.pluralNoun = nounPair[1];
		//calculate singular and plural noun 2
		do {
			var nounPair2 = getRandomNounPair();
			$scope.word.noun2 = nounPair2[0];
			$scope.word.pluralNoun2 = nounPair2[1];
		} while (nounPair[0] === nounPair2[0]);
	}

	$scope.genRanWord = function(wordToGen, numberOfWord) {
		if(numberOfWord==='1') {
			var functionToRun = "getRandom"+wordToGen.charAt(0).toUpperCase()+wordToGen.slice(1);
			$scope.word[wordToGen] = eval(functionToRun+"()");
		} else if (numberOfWord !== '1') {
			var functionToRun = "getRandom"+wordToGen.charAt(0).toUpperCase()+wordToGen.slice(1);
			$scope.word[(wordToGen+numberOfWord)] = eval(functionToRun+"()");
		}
	}

	$scope.genRanWordAndPlural = function(wordToGen, numberOfWord) {
		var functionToRun = "getRandom"+wordToGen.charAt(0).toUpperCase()+wordToGen.slice(1)+"Pair";
		if(numberOfWord === '1') {
			var tempWord = eval(functionToRun+"()");
			$scope.word[wordToGen] = tempWord[0];
			var pluralWord = ("plural"+wordToGen.charAt(0).toUpperCase()+wordToGen.slice(1));
			$scope.word[pluralWord] = tempWord[1];
		} else if (numberOfWord !== '1') {
			var tempWord2 = eval(functionToRun+"()");
			var wordToAddOn = (wordToGen+numberOfWord);
			$scope.word[wordToAddOn] = tempWord2[0];
			var pluralWord = ("plural"+wordToGen.charAt(0).toUpperCase()+wordToGen.slice(1)+numberOfWord);
			$scope.word[pluralWord] = tempWord2[1];
		}
	}

	$scope.genPropName = function() {
		// calculate random proper names based on gender choice
		if($scope.gender.gender === "male") {
			$scope.word.properName = getRandomMaleName();
		} else if ($scope.gender.gender === "female") {
			$scope.word.properName = getRandomFemaleName();
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

	$scope.genRanNum = function(min, max, identifier) {
		$scope.word[identifier] = Math.floor((Math.random()*(max-1))+min);
	}
})