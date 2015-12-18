app.factory('CheckSpecialFeature', function() {
return function(featureKey) {

	switch(featureKey) {

		case 'fontface':
			return 'twa-confused';
			break;

		case 'css-fixed':
			return 'twa-confused';
			break;

		case 'transforms2d':
			return 'twa-confused';
			break;
		

		
			
		default:
			return false;



	}

}
})
