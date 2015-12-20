app.filter('niceStat', function() {
  return function(shorthand) {

  	function checkShorthand(s) {
		if ( shorthand.indexOf(s) > -1 ) {
			return true;
		}
	}

  	switch (true) {
		case checkShorthand('y'):
			return "Supported"
			break
		case checkShorthand('n'):
			return "No Support"
			break
		case checkShorthand('a'):
			return "Partial Support"
			break
		default:
			return shorthand
	}

    	
  }
});


app.filter('classStat', function() {
  return function(shorthand) {

  	function checkShorthand(s) {
		if ( shorthand.indexOf(s) > -1 ) {
			return true;
		}
	}

  	switch (true) {
		case checkShorthand('y'):
			return "supported"
			break
		case checkShorthand('n'):
			return "not-supported"
			break
		case checkShorthand('a'):
			return "partial-support"
			break
		default:
			return shorthand
	}

    	
  }
});