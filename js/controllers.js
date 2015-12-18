app.controller('FeatureController', function($scope, $http, $filter, $routeParams, dataURL) {


	console.log("hello");


	/* DEFINE VARIABLES  */
	var featureKey = $routeParams.featureKey;
	$scope.featureKey = featureKey;
	$scope.feature;
	$scope.notes = [];


	/* REQUEST */
	$http.get(dataURL).then(function(response) {

		var features = response.data.data;

		$scope.feature = features[featureKey];

		var opera_stat_raw = $scope.feature.stats['op_mini']['5.0-8.0']
		$scope.niceStat = $filter('niceStat')(opera_stat_raw);
		$scope.classStat = $filter('classStat')(opera_stat_raw);

		//console.log($scope.feature);


		// IF FEATURE HAS NOTES
		if ( opera_stat_raw.indexOf('#') > -1 ) {

			var notes = opera_stat_raw.split("#");
			notes.splice(0, 1);

			angular.forEach(notes, function(value, key) {
				var note_num = parseInt(value);
				var note = $scope.feature.notes_by_num[note_num];
				$scope.notes.push(note);

			})
		}


	}, function(error) {
		console.log("error: "+error);
	})



	/* WORKAROUNDS  */
	var workaroundURL =  'workarounds/' + featureKey + '.json';
	$scope.workarounds = [];

	$.getJSON(workaroundURL, function(response) {
		angular.forEach(response, function(value, key) {
			$scope.workarounds.push(value);
		})
	});



	// var script = document.createElement('script');
	// script.type = 'text/javascript';
	// script.src = 'https://gist.github.com/ireade/c005d8a1f4f693ecc213.js';
  	//document.body.appendChild('hello');

//var test =  $.getScript("https://gist.github.com/ireade/c005d8a1f4f693ecc213.js");
// console.log(test);

	

});







app.controller('MainController', function($scope, $http, $filter, CheckSpecialFeature, dataURL) {


	/* DEFINE VARIABLES  */
	$scope.features = [];



	/* FILTER FEATURES */
	$scope.filterObj = {
		$: ''
	}
	$scope.chooseCategory = function(category) {
		$scope.filterObj = {
			$: category
		}
	}



	/* REQUEST */
    $http.get(dataURL).then(function(response) {

		var features = response.data.data;
		//console.log(response.data);

		// LOOP THROUGH ALL FEATURES
		angular.forEach(features, function(value, key) {

			var opera_stat_raw = value.stats['op_mini']['5.0-8.0']
			var opera_stat_clean = $filter('classStat')(opera_stat_raw);

			// ONLY PUSH FEATURES THAT ARE NOT SUPPORTED OR PARTIALLY SUPPORTED BY OPERA MINI
			if ( opera_stat_clean === 'not-supported' | opera_stat_clean === 'partial-support' ) {

				$scope.features.push({
					key: key,
					special: CheckSpecialFeature(key),
					title: value.title,
					description: value.description,
					opera_stat_raw: opera_stat_raw,
					opera_stat_nice: $filter('niceStat')(opera_stat_raw),
					opera_stat_class: $filter('classStat')(opera_stat_raw),
					categories: value.categories

				})

			}



			
		  
		}); // and angular.foreach

	}, function(error) {
		console.log("error: "+error);
	})




})