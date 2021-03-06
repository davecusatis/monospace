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

        function link(scope, element, attrs, ctrl){
            CodeMirror.commands.save = function(instance){
                var file = instance.getValue();
                ctrl.save(file);

            };

            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                mode: "clike"
            });

            ctrl.load().success(function (data, status, headers, config){
                editor.getDoc().setValue(data.script)
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