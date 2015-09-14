/**
 * Created by david on 8/3/15.
 */

(function(){
    angular
        .module('monospace.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc html5 routes
     */

    function config($locationProvider){
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();