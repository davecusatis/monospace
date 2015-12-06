/**
 * Created by david on 11/29/15.
 */

/**
 * LoginController
 * @namespace monospace.auth.controllers
 */

(function() {
    'use strict';

    angular
        .module('monospace.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespace LoginController
     */

    function LoginController($location, $scope, Authentication) {
        var vm = this;
        vm.login = login;

        activate();

        /**
         * @name activate
         * @desc actions to be performed when this controller is init
         * @memberOf monospace.auth.controllers.LoginControllers
         */
        function activate(){
            // if user is auth, kick em out
            if (Authentication.isAuthenticated()){
                $location.url('/');
            }
        }

        function login(){
            Authentication.login(vm.email, vm.password);
        }
    }
})();