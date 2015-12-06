/**
 * Created by david on 12/6/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];

    /**
     * @namespace NavbarController
     */
    function NavbarController($scope, Authentication) {
        var vm = this;

        vm.logout = logout;

        /**
         * @name logout
         * @desc logs out user
         * @memberOf monospace.layout.controllers.NavbarController
         */
        function logout(){
            Authentication.logout();
        }
    }
})();