/**
 * Created by david on 8/3/15.
 */

(function(){
    'use strict';

    angular
        .module('monospace', [
            'monospace.routes',
            'monospace.authentication'
        ])

    angular
        .module('monospace.routes', ['ngRoute']);

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