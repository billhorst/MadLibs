angular.module('directives', [])

.directive('fillInWords', function() {
	return {
		restrict: 'E',
		transclude: false,
		templateUrl: '../templates/wordList.html'
	}
})

.directive('buttonList', function() {
	return {
		restrict: 'E',
		templateUrl: '../templates/buttonList.html'
	}
})

.directive('storiesView', function() {
	return {
		restrict: 'E',
		templateUrl: '../templates/stories.html'
	}
})

.directive('inputBox', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '../templates/inputBox.html'
	}
})

.directive('introToApp', function() {
	return {
		restrict: 'E',
		templateUrl: '../templates/intro.html'
	}
})

.directive('foot', function() {
	return {
		restrict: 'E',
		templateUrl: '../templates/footer.html'
	}
})