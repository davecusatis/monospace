/**
 * Created by david on 8/3/15.
 */

//helper to track installed modules
(function(orig) {
    angular.modules = [];
    angular.module = function() {
        if (arguments.length > 1) {
            angular.modules.push(arguments[0]);
        }
        return orig.apply(null, arguments);
    };
})(angular.module);

(function(){
    'use strict';

    angular
        .module('monospace', [
            'monospace.authentication',
            'monospace.routes',
            'monospace.config',
            'monospace.layout',
            'monospace.editor',
            'monospace.display',
            'ngAnimate'
        ]);

    angular
        .module('monospace.routes', ['ngRoute']);

    angular
        .module('monospace.config', []);

    angular
        .module('monospace')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc update xsrf $http headers to align with Django
     */
    function run($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();
