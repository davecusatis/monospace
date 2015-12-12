/**
 * Created by david on 12/11/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.editor.controllers')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$scope', 'Authentication'];

    /**
     * @namespace EditorController
     */
    function EditorController($scope, Authentication) {
        var vm = this;

        vm.save = save;

        /**
         * @name save
         * @desc saves the current script
         * @memberOf monospace.editor.controllers.EditorController
         */
        function save(file){
            $.post('/v0/save_script',
                {
                    'script': file,
                    'user': Authentication.getAuthenticatedAccount()
                }
            );
        }
    }
})();