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
        console.log('\nin the reg controller\n');
        var vm = this;

        vm.register = register;

        /**
         * @name register
         * @desc register new user
         * @memberOf monospace.authentication.controllers.RegisterController
         */
        function register(){
            console.log("now registering");
            Authentication.register(vm.email, vm.password);
        }
    }

})();