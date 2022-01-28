'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'AuthCtrl',
                templateUrl: 'templates/login.html'
            })
            .state('app', {
                url: '/app',
                controller: 'MasterCtrl',
                templateUrl: 'templates/app/app.html'
            })
            .state('app.usuarios', {
                url: '/usuarios',
                controller: 'usuariosCtrl',
                templateUrl: 'templates/app/usuarios/usuarios.html'
            })
            .state('app.pagos', {
                url: '/pagos',
                controller: 'pagosCtrl',
                templateUrl: 'templates/app/pagos/pagos.html'
            })
            .state('app.historico', {
                url: '/historico',
                controller: 'historicoCtrl',
                templateUrl: 'templates/app/historico/historico.html'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                controller: 'dashboardCtrl',
                templateUrl: 'templates/app/Dashboard/dashboard.html'
            })
            .state('app.pos', {
                url: '/pos',
                controller: 'posCtrl',
                templateUrl: 'templates/app/pos/pos.html'
            })
    }
]);
