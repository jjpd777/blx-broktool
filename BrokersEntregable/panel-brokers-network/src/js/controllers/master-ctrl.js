/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', '$localStorage', '$http', '$state', '$ngConfirm', 'usuarios','$rootScope', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $localStorage, $http, $state, $ngConfirm, usuarios,$rootScope) {

    $rootScope.urlMain = "http://gyo-solutions.com/dev_brokers_network/php/admin/";


    $scope.salir = function () {
        $localStorage.logged = false;
        $localStorage.user = null;
        $scope.logged = false;
        $scope.user = null;
        $state.go('login');
    };

    $scope.user = $localStorage.user;

    var mobileView = 992;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.editarPerfil = function () {

        console.log('user', $scope.user);
        $scope.user.pass2 = '';

        var content =
            '<form>' +
            '<label>Usuario:</label>' +
            '<input type="text" class="form-control" ng-model="user.usuario"/>' +
            '<label>Contraseña:</label>' +
            '<input type="password" class="form-control" ng-model="user.pass"/>' +
            '<label>Confirmar Contraseña:</label>' +
            '<input type="password" class="form-control" ng-model="user.pass2"/>' +
            '</form>';

        $ngConfirm({
            title: 'Editar Perfil',
            content: content,
            scope: $scope,
            theme: 'supervan',
            buttons: {
                confirmar: {
                    text: 'Confirmar',
                    btnClass: 'btn-blue',
                    action: function (scope, button) {
                        if ($scope.user.pass2 === '') {
                            usuarios.editarUsuario($scope.user.id_usuario, $scope.user.usuario, $scope.user.pass)
                                .then(function (data) {
                                    if (data.data === '1') {
                                        return false;
                                    }
                                    else {
                                        alert('Error al edit usuario');
                                    }
                                })
                        }
                        else {
                            if ($scope.user.pass === $scope.user.pass2) {
                                usuarios.editarUsuario($scope.user.id_usuario, $scope.user.usuario, $scope.user.pass)
                                    .then(function (data) {
                                        if (data.data === '1') {
                                            return false;
                                        }
                                        else {
                                            alert('Error al edit usuario');
                                        }
                                    })
                            }
                        }
                        return true; // prevent close;
                    }
                },
                cancelar: {
                    text: 'Cancelar',
                    btnClass: 'btn-warning',
                    action: function (scope, button) {
                        return true;
                    }
                }
            }
        });
    }

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };
}
