/**
 * Created by david on 7/9/2016
 */

(function(){
    'use strict';
    angular
        .module('monospace.display.services')
        .factory('DisplayService', DisplayService);

    DisplayService.$inject = [];

    /**
     * @namespace DisplayService
     * @ returns {Factory}
     */
    function DisplayService(){
        /**
         * @name DisplayService
         * @desc display factory to be returned
         */
        var DisplayService = {
            connect: connect,
            send_start_request: send_start_request
        };
        return DisplayService;

        /**
         * @name connect
         * @desc opens websocket connection to monoserv
         * @param websocket_url - url for monoserv socket
         */
        function connect(websocket_url){
            var ws = new WebSocket(websocket_url);
            set_handlers(ws);
            return ws;
        }

        /**
         * @name send_start_request
         * @desc tell monoserv to start sending frames
         */
        function send_start_request(ws, user_script){
            ws.send(JSON.stringify({
                "user_script": user_script
            }));
        }

        function onclose(){
            return;
        }

        function onopen(){
            return;
        }

        function onmessage(msg){
            var frames = JSON.parse(msg.data);
            var deferred = $q.defer();
            deferred.resolve(frames);

            return deferred.promise;
        }

        function onerror(){
            console.log("Error");
        }

        function set_handlers(ws){
            ws.onclose = onclose;
            ws.onopen = onopen;
            ws.onmessage = onmessage;
            ws.onerror = onerror;
        }
    }
})();
