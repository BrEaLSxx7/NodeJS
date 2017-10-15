(() => {
    'use strict';
    angular
            .module('CV')
            .controller('indexController', indexController);
    indexController.$inject = ['$scope', 'DataBaseService', '$log'];
    function indexController($scope, DataBase, $log) {
        $scope.data = {};
        $scope.messageSuccess = '';
        $scope.success = false;
        $scope.save = function () {
            DataBase.Guardar($scope.data).then(function successCallback(response) {
                $scope.messageSuccess = response.data.message;
                $scope.success = true;
                $scope.data = {};
            }, function errorCallback(response) {
                $log.error(response);
            });
        };
    }

})();