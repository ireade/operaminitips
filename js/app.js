var app = angular.module('WTFOperaMini', ['ngRoute']);

app.constant('dataURL', 'https://raw.githubusercontent.com/Fyrd/caniuse/master/data.json');

app.config(function($routeProvider) {

	$routeProvider
	
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		})
		.when('/:featureKey', {
			controller: 'FeatureController',
			templateUrl: 'views/feature.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});


