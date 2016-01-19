/**
 * Created by david on 12/14/15.
 */

/**
 * Navbar
 * @namespace monospace.layout.directives
 */
(function(){
    'use strict';

    angular
        .module('monospace.layout.directives')
        .directive('navbar', navbar);

    function navbar(){
        /**
         * @name directive
         * @desc directive for navbar
         * @memberOf monospace.layout.directives.navbar
         */
        var directive = {
            controller: 'LayoutController',
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: '/static/templates/navbar_directive.html'
        };
        return directive;
    }

})();