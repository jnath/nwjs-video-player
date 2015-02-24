/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./module'], function (states) {
    'use strict';

    return states.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('home', {
            url:'/home',
            templateUrl: './views/home.html',
            controller: 'HomeCtrl'
        });

    }]);
});
