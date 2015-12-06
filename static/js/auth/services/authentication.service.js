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
            register: register,
            login: login,
            isAuthenticated: isAuthenticated,
            setAuthenticatedAccount: setAuthenticatedAccount,
            getAuthenticatedAccount: getAuthenticatedAccount,
            unauthenticate: unauthenticate
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
            }).then(registerSuccess, registerError);

            /**
             * @name reg success
             * @desc callback that logs a user in after reg
             */
            function registerSuccess(data, status, headers, config){
                Authentication.login(email, password);
            }

            /**
             * @name registerError
             * @desc redirect to index
             */
            function registerError(data, status, headers, config){
                console.error('bad news');
            }
        }

        function login(email, password) {
            return $http.post('/api/v0/auth/login/', {
                email: email,
                password: password
            }).then(loginSuccess, loginError);

            function loginSuccess(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);
                window.location = '/';
            }

            function loginError(data, status, headers, config) {
                console.error('bad');
                window.location('/login'); //TODO: maybe this needs to go
            }
        }

        function getAuthenticatedAccount(){
            if(!$cookies.authenticatedAccount){
                return;
            }

            return JSON.parse($cookies.authenticatedAccount);
        }

        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }
        function isAuthenticated(){
            return !!$cookies.authenticatedAccount;
        }

        function unauthenticate(){
            delete $cookies.authenticatedAccount;
        }
    }
})();