



var Chromecast = require('./src/app/lib/video.js-chromecast-nw/src/chromecast');

var services = {};

var chromcast = new Chromecast();

chromcast.find(function (cm) {
	services = cm.services;
});
