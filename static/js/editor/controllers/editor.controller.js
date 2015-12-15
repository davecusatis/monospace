/**
 * Created by david on 12/11/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.editor.controllers')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$scope', '$location', 'Authentication', 'EditorService'];

    /**
     * @namespace EditorController
     */
    function EditorController($scope, $location, Authentication, EditorService) {
        var vm = this;
        vm.save = save;
        vm.load = load;
        activate()

        /**
         * @name activate
         * @desc actions to be performed when this controller is init
         * @memberOf monospace.editor.controllers.EditorController
         */
        function activate(){
            if (!Authentication.isAuthenticated()){
                $location.url('/');
            }
        }

        /**
         * @name save
         * @desc saves the current script
         * @memberOf monospace.editor.controllers.EditorController
         */
        function save(file){
            EditorService.save(file, Authentication.getAuthenticatedAccount());
        }

        function load(){
            return EditorService.load(Authentication.getAuthenticatedAccount());
        }
    }
})();