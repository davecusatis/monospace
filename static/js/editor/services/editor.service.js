/**
 * Created by david on 12/12/15.
 */

/**
 * EditorService
 * @namespace monospace.editor.services
 */
(function(){
    'use strict';

    angular
        .module('monospace.editor.services')
        .factory('EditorService', EditorService);

    EditorService.$inject = ['$http'];

    /**
     * @namespace EditorService
     * @returns {Factory}
     */
    function EditorService($http) {
        /**
         * @name EditorService
         * @desc factory to be returned
         */

        var EditorService = {
            save: save,
            load: load
        };
        return EditorService;


        /**
         * @name save
         * @desc saves user's scripts in database
         * @param user_script
         * @param user
         */
        function save(user_script, user){
            $http.post('/api/v0/save_script/',
                {
                    'script': user_script,
                    'user': user
                }
            ).then(scriptSaveSuccess, scriptSaveFailure);

            /**
             * @name scriptSaveSuccess
             * @desc callback to execute on saving script success
             */
            function scriptSaveSuccess(){
                console.log('Script saved'); // todo: "toast" this message

            }

            /**
             * @name scriptSaveFailure
             * @desc callback for saving script failure
             */
            function scriptSaveFailure(){
                console.log('Unable to save script');
            }
        }


        function load(user){
            return $http.get('api/v0/load_script/' + user + '/', {});


        }

    }
})();