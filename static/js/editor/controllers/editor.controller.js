/**
 * Created by david on 12/11/15.
 */

(function (){
    'use strict';

    angular
        .module('monospace.editor.controllers')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$scope', '$location', 'Authentication', 'EditorService', 'DisplayService'];

    /**
     * @namespace EditorController
     */
    function EditorController($scope, $location, Authentication, EditorService, DisplayService) {
        var vm = this;
        vm.save = save;
        vm.load = load;
        vm.connect = connect;
        vm.start = start;
        activate();

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

        function post(file){
            EditorService.save(file, Authentication.getAuthenticatedAccount());
        }

        function connect(websocket_url){
            $scope.frames = [];
            console.log("in thaaa mix");
            vm.ws = DisplayService.connect(websocket_url);
            vm.ws_connected = true;
        }

        function start(user_script){
            DisplayService.send_start_request(vm.ws, user_script);
        }
    }
})();
