/**
 * Created by david on 8/3/15.
 */

(function() {
    'use strict';

    angular
        .module('monospace.authentication', [
            'monospace.authentication.controllers',
            'monospace.authentication.services'
        ]);

    angular
        .module('monospace.authentication.controllers', []);

    angular
        .module('monospace.authentication.services', ['ngCookies']);
})();