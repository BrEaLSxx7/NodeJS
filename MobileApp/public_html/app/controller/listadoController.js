(() => {
    'use strict';
    angular
            .module('CV')
            .controller('listadoController', listadoController);
    listadoController.$inject = ['$scope', 'DataBaseService', '$log'];
    function listadoController($scope, DataBase, $log) {
        $scope.listado = [];
        DataBase.Listar().then(function successCallback(response) {
            $scope.listado = response.data.rows;
        }, function errorCallback(response) {
            $log.error(response);
        });
    }

})();