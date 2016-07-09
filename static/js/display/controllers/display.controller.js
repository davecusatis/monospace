/**
 * Created by david on 12/13/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.display.controllers')
        .controller('DisplayController', DisplayController);

    DisplayController.$inject = ['$scope', '$location', 'Authentication', 'DisplayService'];

    /**
     * @namespace DisplayController
     */
    function DisplayController($scope, $location, Authentication, DisplayService) {
        var vm = this;
        activate();

        /**
         * @name activate
         * @desc actions to be performed when this controller is init
         * @memberOf monospace.display.controllers.DisplayController
         */
        function activate(){
            if (!Authentication.isAuthenticated()){
                $location.url('/');
            }
        }
    }
})();
