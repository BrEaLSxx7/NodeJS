(() => {
    'use strict';
    angular
            .module('CV')
            .service('DataBaseService', DataBaseService);
    DataBaseService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
    function DataBaseService($http, host, $httpParamSerializerJQLike) {

        this.Guardar = function (data) {
            return $http.post(host, $httpParamSerializerJQLike(data));
        };
        
        this.Listar = function () {
            return $http.get(host + 'listado');
        };

    }

})();