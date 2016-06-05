randomWordArrays = {
	malePropNameArray: ["Edwin","Mike","Bob Lough","Jay","Tim","Bobby","Trevor","Snoopy","Bill","Mason","Max"],
	femalePropNameArray: ["Katrina","Carrie","Jacqueline","Sonja","Pat","Rose","Hello Kitty","Evalyn","Capriece","Soleyda"],
	emotionArray: ["happy","angry","cheery","jaded","sad","mad","uppity","easily offended","tired","giddy","bored","pretentious"],
	verbArray: ["play","run","walk dogs","cry","swim","work","eat","study","shop","jump","walk","read","sleep"],
	adjectiveArray: ["funny","smart","ridiculous","humble","shameful","silly","messed up","gluten-intolerant"],
	cityArray: ["Washington DC","Tokyo","Seattle","Moscow","Hamburg","Tijuana","Loveland","Aichi","Kabul","Akron"],
	countryArray: ["Thailand","Mexico","The USA","North Korea","Bear Country","The United Arab Emirates","Ireland","Afghanistan"],
	areaArray: ["field","factory","chop shop","pet store","furries festival","Bed Bath & Beyond","Golden Corral"],
	ingVerbArray: ["playing","running","howling","bartering","jumping","drinking","fishing","walking","shopping"],
	animalArray: ["dog","cat","monkey","drop-bear","zebra","garbage-monster","shark","platypus","koala"],
	animalPairs: {
		"dog": "dogs",
		"cat": "cats",
		"monkey": "monkeys",
		"drop-bear": "drop-bears",
		"zebra": "zebras",
		"garbage-monster": "garbage-monsters",
		"shark": "sharks",
		"platypus": "platypuses",
		"koala": "koalas"
	},		
	nounArray: ["car","computer","stool","pencil","airplane","bar"],
	nounPairs: {
		"car": "cars",
		"computer": "computers",
		"stool": "stools",
		"pencil": "pencils",
		"airplane": "airplanes",
		"bar": "bars"
	}
}

getRandomMaleName = function() {
	return randomWordArrays.malePropNameArray[Math.floor(Math.random()*randomWordArrays.malePropNameArray.length)];
}

getRandomFemaleName = function() {
	return randomWordArrays.femalePropNameArray[Math.floor(Math.random()*randomWordArrays.femalePropNameArray.length)];
}

getRandomEmotion = function() {
	return randomWordArrays.emotionArray[Math.floor(Math.random()*randomWordArrays.emotionArray.length)];
}

getRandomVerb = function() {
	return randomWordArrays.verbArray[Math.floor(Math.random()*randomWordArrays.verbArray.length)];
}

getRandomSingularAnimal = function() {
	return randomWordArrays.animalArray[Math.floor(Math.random()*randomWordArrays.animalArray.length)];
}

getRandomPluralAnimal = function() {
	return randomWordArrays.pluralAnimalArray[Math.floor(Math.random()*randomWordArrays.pluralAnimalArray.length)];
}

getRandomAdjective = function() {
	return randomWordArrays.adjectiveArray[Math.floor(Math.random()*randomWordArrays.adjectiveArray.length)];
}

getRandomSingularNoun = function() {
	return randomWordArrays.nounArray[Math.floor(Math.random()*randomWordArrays.nounArray.length)];
}

getRandomPluralNoun= function() {
	return randomWordArrays.pluralNounArray[Math.floor(Math.random()*randomWordArrays.pluralNounArray.length)];
}

getRandomAnimalPair = function() {
	var singularAnimal = randomWordArrays.animalArray[Math.floor(Math.random()*Object.keys(randomWordArrays.animalPairs).length)];
	var pluralAnimal = randomWordArrays.animalPairs[singularAnimal];
	return [singularAnimal,pluralAnimal];
}

getRandomNounPair = function() {
	var singularNoun = randomWordArrays.nounArray[Math.floor(Math.random()*Object.keys(randomWordArrays.nounPairs).length)];
	var pluralNoun = randomWordArrays.nounPairs[singularNoun];
	return [singularNoun, pluralNoun];
}

getRandomCity = function() {
	return randomWordArrays.cityArray[Math.floor(Math.random()*Object.keys(randomWordArrays.cityArray).length)];
}

getRandomCountry = function() {
	return randomWordArrays.countryArray[Math.floor(Math.random()*Object.keys(randomWordArrays.countryArray).length)];
}

getRandomName = function() {
	return randomWordArrays.malePropNameArray[Math.floor(Math.random()*randomWordArrays.malePropNameArray.length)];
}

getRandomArea = function() {
	return randomWordArrays.areaArray[Math.floor(Math.random()*randomWordArrays.areaArray.length)];
}

getRandomIngVerb = function() {
	return randomWordArrays.ingVerbArray[Math.floor(Math.random()*randomWordArrays.ingVerbArray.length)];
}

getRandomNumber = function(min,max) {
	return Math.floor((Math.random()*(max-1))+min);
}