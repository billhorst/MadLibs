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
	// var malePropNames = randomWordArrays.malePropNameArray;
	// var femalePropNames = randomWordArrays.femalePropNameArray;
	// var emotions = randomWordArrays.emotionArray;
	// var verbs = randomWordArrays.verbArray;
	var animals = randomWordArrays.animalArray;
	var animal2s = randomWordArrays.animalArray;
	var adjectives = randomWordArrays.adjectiveArray;
	var adjective2s = randomWordArrays.adjectiveArray;
	var nouns = randomWordArrays.nounArray;
	var noun2s = randomWordArrays.nounArray;
	var pluralNoun2s = randomWordArrays.pluralNounArray;

	//function to calculate random words
	// calcRandomWord = function(nameArray) {
	// 	return nameArray[Math.floor(Math.random()*nameArray.length)];
	// }

	// calcRandomWordAndPlural = function(nameArray) {
	// 	var word;
	// 	var pluralWord;
	// 	var randomNum = Math.floor(Math.random()*nameArray.length);
	// 	word = nameArray[randomNum];
	// 	pluralWord = 
	// 	return [word, pluralWord];
	// }

	//add a function calculates random word and its plural

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
			// calculate plural for animal 1 (making it the plural of the above generated animal)
		// 	for (var i = 0; i < randomWordArrays.pluralAnimalArray.length; i++) {
		// 		if($scope.word.animal.charAt(0)==randomWordArrays.pluralAnimalArray[i].charAt(0) &&
		// 			$scope.word.animal.charAt(1)==randomWordArrays.pluralAnimalArray[i].charAt(1)) {
		// 			$scope.word.pluralAnimal = randomWordArrays.pluralAnimalArray[i];
		// 	}
		// }

		//assigning second animal to animal2 while making sure it's not same animal as animal(1)
		// do {
		// 	$scope.word.animal2 = calcRandomWord(animals);
		// 	// calculate plural for animal 2 (making it the plural of the above generated animal)
		// 	for (var i = 0; i < randomWordArrays.pluralAnimalArray.length; i++) {
		// 		if($scope.word.animal2.charAt(0)==randomWordArrays.pluralAnimalArray[i].charAt(0) &&
		// 			$scope.word.animal2.charAt(1)==randomWordArrays.pluralAnimalArray[i].charAt(1)	) {
		// 			$scope.word.pluralAnimal2 = randomWordArrays.pluralAnimalArray[i];
		// 	}
		// } } while ($scope.word.animal === $scope.word.animal2);


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
			// calculate plural for noun 1 (making it the plural of the above generated noun)
		// 	for (var i = 0; i < randomWordArrays.pluralNounArray.length; i++) {
		// 		if($scope.word.noun.charAt(0)==randomWordArrays.pluralNounArray[i].charAt(0) &&
		// 			$scope.word.noun.charAt(1)==randomWordArrays.pluralNounArray[i].charAt(1)) {
		// 			$scope.word.pluralNoun = randomWordArrays.pluralNounArray[i];
		// 	}
		// }

		//assigning second noun to noun2 while making sure it's not same noun as noun(1)
		// do {
		// 	$scope.word.noun2 = calcRandomWord(nouns);
			// calculate plural for noun 2 (making it the plural of the above generated noun)
		// 	for (var i = 0; i < randomWordArrays.pluralNounArray.length; i++) {
		// 		if($scope.word.noun2.charAt(0)==randomWordArrays.pluralNounArray[i].charAt(0) &&
		// 			$scope.word.noun2.charAt(1)==randomWordArrays.pluralNounArray[i].charAt(1)	) {
		// 			$scope.word.pluralNoun2 = randomWordArrays.pluralNounArray[i];
		// 	}
		// } } while ($scope.word.noun === $scope.word.noun2);

		// console.log(getRandomMaleName());
		// console.log(getRandomFemaleName());
		// console.log(getRandomEmotion());
		// console.log(getRandomVerb());
		// console.log(getRandomSingularAnimal());
		// console.log(getRandomPluralAnimal());
		// console.log(getRandomAdjective());
		// console.log(getRandomSingularNoun());
		// console.log(getRandomPluralNoun());
		// console.log(getRandomAnimalPair());
		// console.log(getRandomNounPair());

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

	// $scope.fillInBlankWords = function(word) {
	// 	for (var word in $scope.word) {
	// 		alert(word);
	// 	}
	// }

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