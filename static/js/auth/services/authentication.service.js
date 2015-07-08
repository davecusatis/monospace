/**
 * Created by david on 7/8/15.
 */

/**
 * Authentication
 * @namespace monospace.authentication.services
 */
(function(){
    'use strict';

    angular
        .module('monospace.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];

    /**
     * @namespace Authentication
     * @returns {Factory}
     */
    function Authentication($cookies, $http) {
        /**
         * @name Authentication
         * @desc factory to be returned
         */

        var Authentication = {
            register: register
        };
        return Authentication;

        /**
         * @name register
         * @desc try to register new user
         * @param {string} email the email entered by the user
         * @param {string} password the password entered by the user
         */
        function register(email, password) {
            return $http.post('/api/v0/users/', {
                email: email,
                password: password
            });
        }
    }
})();