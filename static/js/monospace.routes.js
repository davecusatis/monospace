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
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/login.html'
        }).when('/editor', {
            controller: 'EditorController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/editor.html'
        }).otherwise('/');
    }
})();