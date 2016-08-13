'use strict';

var getColor = require('./getColor.js');


function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

var minColor = 8400;
var maxColor = 10000;

function runColor() {

	try {
		getColor(minColor++);
	}
    catch (err) {
    	console.log(i + " failed");
    	console.log(err);
    }

    if (minColor <= maxColor) {
		setTimeout(runColor, 2010);
    }
}

runColor();