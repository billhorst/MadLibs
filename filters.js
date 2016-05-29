angular.module('filters', [])

.filter('capitalize', function() {
	return function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
});