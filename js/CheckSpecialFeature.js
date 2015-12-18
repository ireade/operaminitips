app.factory('CheckSpecialFeature', function() {
return function(featureKey) {

	switch(featureKey) {

		case 'apng':
			return 'WTF?';
			break;

			
		default:
			return false;



	}

}
})
