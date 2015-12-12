/**
 * Created by david on 12/11/15.
 */

/**
 * AuthController
 * @namespace monospace.auth.controllers
 */

(function() {
    'use strict';

    angular
        .module('monospace.authentication.controllers')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace AuthController
     */

    function AuthController($location, $scope, Authentication) {
        var vm = this;

        vm.isAuthenticated = Authentication.isAuthenticated();
    }
})();