/**
 * Created by david on 12/13/15.
 */

/**
 * Editor
 * @namespace monospace.editor.directives
 */
(function() {
    'use strict';

    angular
        .module('monospace.editor.directives')
        .directive('editor', editor);

    function editor(){

        function link(scope, element, attrs){
            CodeMirror.commands.save = function(instance){
                var file = instance.getValue();
                vm.save(file);

            };

            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                mode: "clike"
            });
        }

        /**
         * @name directive
         * @desc directive for the editor
         * @memberOf monospace.editor.directives.editor
         */
        var directive = {
            controller: 'EditorController',
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: '/static/templates/editor_directive.html',
            link: link
        };
        return directive;
    }


})();