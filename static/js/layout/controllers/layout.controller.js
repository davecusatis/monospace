/**
 * Created by david on 12/6/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.layout.controllers')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$scope', 'Authentication'];

    /**
     * @namespace LayoutController
     */
    function LayoutController($scope, Authentication) {
        var vm = this;

        vm.logout = logout;
        vm.isAuthenticated = Authentication.isAuthenticated;
        /**
         * @name logout
         * @desc logs out user
         * @memberOf monospace.layout.controllers.LayoutController
         */
        function logout(){
            Authentication.logout();
        }
    }
})();