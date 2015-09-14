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
        console.log(' in monospace routes\n');
        console.log($routeProvider);
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/register.html'
        //});
        }).otherwise('/');
    }
})();