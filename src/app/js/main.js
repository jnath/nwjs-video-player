/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
requirejs.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'handlebars': '../lib/handlebars/handlebars',
        'text': '../lib/requirejs-text/text',
        '_': '../lib/lodash/dist/lodash',
        '$': '../lib/jquery/dist/jquery',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls',
        'video-js': '../lib/video.js/dist/video-js/video.dev',
        'video-js-chromecast-nw': '../lib/video.js-chromecast-nw/src/video.js-chromecast-nw'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular':{
            exports: 'angular'
        },
        'angular-ui-router':{
            deps:['angular']
        },
        'handlebars':{
            exports:'Handlebars'
        },
        '_':{
            exports:'_'
        },
        'angular-bootstrap':{
            deps: ['angular', '$']
        },
        'video-js-chromecast-nw':{
            deps:['video-js']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './nw',
        './bootstrap'
        // '../lib/video.js-chromecast-nw/src/video.js-chromecast-nw'
    ]
});
