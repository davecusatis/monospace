/**
 * Created by david on 7/8/15.
 */
(function(){
    'use strict';

    angular
        .module('monospace.authentication.controllers')
        .controller('RegisterController', RegisterController)

    RegisterController.$inject = ['$location', '$scope', 'Authentication']

    /**
     * @namespace RegisterController
     */
    function RegisterController($location, $scope, Authentication){
        var vm = this;

        vm.register = register;

        /**
         * @name register
         * @desc register new user
         * @memberOf monospace.authentication.controllers.RegisterController
         */
        function register(){
            Authentication.register(vm.email, vm.password);
        }
    }
})();