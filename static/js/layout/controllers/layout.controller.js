/**
 * Created by david on 12/6/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.layout.controllers')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$scope', 'Authentication', '$http'];

    /**
     * @namespace LayoutController
     */
    function LayoutController($scope, Authentication, $http) {
        var vm = this;

        vm.logout = logout;
        vm.post_to_monoserv = post_to_monoserv;
        vm.isAuthenticated = Authentication.isAuthenticated;
        /**
         * @name logout
         * @desc logs out user
         * @memberOf monospace.layout.controllers.LayoutController
         */
        function logout(){
            Authentication.logout();
        }

        function post_to_monoserv(){
            return $http.post('http://69.253.85.137:2000/', {
                'test': 'test'
            }).then(onsuccess, onfail);

            function onsuccess() {
                console.log('success');
            }

            function onfail(){
                console.log('fail');
            }
        }

    }
})();