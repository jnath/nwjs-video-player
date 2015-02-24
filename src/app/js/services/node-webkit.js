define(['./module', '_'], function (services, _) {
    'use strict';

    services.service('nwService', ['$rootScope', '$q', function($rootScope, $q)  {

        // Expose gui and main window
        var gui = this.gui = require("nw.gui");
        
        this.window = this.gui.Window.get();

        window.ondragover = function(e){
            e.preventDefault();
            return false;
        }

        window.ondrop = function(e){
            e.preventDefault();
            return false;
        }

    }]);

});

