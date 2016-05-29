angular.module('directives', [])

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