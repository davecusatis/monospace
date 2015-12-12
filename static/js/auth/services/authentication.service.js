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
            logout: logout,
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

        /**
         * @name login
         * @desc hits the api to login
         * @param email
         * @param password
         * @returns {*}
         */
        function login(email, password) {
            return $http.post('/api/v0/auth/login/', {
                email: email,
                password: password
            }).then(loginSuccess, loginError);

            function loginSuccess(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);
                window.location = '/editor';
            }

            function loginError(data, status, headers, config) {
                console.error('bad');
                window.location('/login'); //TODO: maybe this needs to go
            }
        }

        /**
         * @name logout
         * @desc hits the logout api
         * @returns {*}
         */
        function logout(){
            return $http.post('/api/v0/auth/logout/')
                .then(logoutSuccess, logoutError);

            function logoutSuccess(data, status, headers, config){
                Authentication.unauthenticate();

                window.location = '/login';
            }

            function logoutError(data, status, headers, config){
                console.log("catastrophe");
            }
        }

        /**
         * @name getAuthenticatedAccount
         * @desc returns auth token and user info
         * @returns {*}
         */
        function getAuthenticatedAccount(){
            if(!$cookies.authenticatedAccount){
                return;
            }

            return JSON.parse($cookies.authenticatedAccount);
        }

        /**
         * @name setAuthenticatedAccount
         * @desc sets authtoken in cookies
         * @param account
         */
        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        /**
         * @name isAuthenticated
         * @desc returns true is user is authenticated, false otherwise
         * @returns {boolean}
         */
        function isAuthenticated(){
            return !!$cookies.authenticatedAccount;
        }

        /**
         * @name unauthenticate
         * @desc remove the auth token
         */
        function unauthenticate(){
            delete $cookies.authenticatedAccount;
        }
    }
})();