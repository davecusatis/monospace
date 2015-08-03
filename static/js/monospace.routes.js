/**
 * Created by david on 7/22/15.
 */

(function() {
    'use strict';

    angular
        .module('monospace.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    /**
     * @name config
     * @desc define valid application routes
     */

    function config($routeProvider){
        $routeProvider.when('/register', {
            controller: 'ResigisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).otherwise('/');
    }
})();