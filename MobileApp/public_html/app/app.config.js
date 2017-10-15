(() => {
    'use strict';
    
    angular.module('CV').constant('host', 'http://192.168.43.222:3000/');
    
    angular
            .module('CV')
            .config(config);
    
    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
    function config($httpProvider, $stateProvider, $urlRouterProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('index', {
                    url: '/',
                    controller: 'indexController',
                    templateUrl: 'app/view/inicio.html',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([{
                                        files: ['app/controller/indexController.js']
                                    }]);
                            }]
                    }
                })
                .state('listar', {
                    url: '/lista',
                    controller: 'listadoController',
                    templateUrl: 'app/view/listado.html',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([{
                                        files: ['app/controller/listadoController.js']
                                    }]);
                            }]
                    }
                });
    }

})();