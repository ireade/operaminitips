app.factory('CheckSpecialFeature', function() {

var emojis = [
	'twa-confused',
	'twa-tired-face',
	'twa-frowning',
	'twa-expressionless',
	'twa-unamused',
	'twa-weary',
	'twa-confounded',
	'twa-cry',
	'twa-sob',
	'twa-astonished'
];


var specialFeatures = [
	'fontface',
	'css-fixed',
	'transforms2d',
	'border-radius',
	'css-transitions',
	'text-decoration',
	'link-icon-png',
	'form-validation',
	'css-animation',
	'calc',
	'transforms2d',
	'viewport-units',
	'html5semantic',
	'audio',
	'video',
	'filereader',
	'shadowdom',
	'css-initial-value',
	'use-strict',
	'script-async'
]


return function(featureKey) {
	for (i = 0; i < specialFeatures.length; i++) {
		if (featureKey == specialFeatures[i]) {
			var randomNumber = Math.floor( Math.random() * emojis.length );
			return emojis[randomNumber];
			break;
		}
	}
}
})
