/**
 * Master Controller
 */

angular.module('RDash')
    .controller('AuthCtrl', ['$scope', '$cookieStore', '$localStorage', '$http', '$state', '$timeout', 'auth','$rootScope', AuthCtrl]);

function AuthCtrl($scope, $cookieStore, $localStorage, $http, $state, $timeout, auth,$rootScope) {
    $rootScope.urlMain = "http://gyo-solutions.com/dev_brokers_network/php/admin/";

    /**
     * Modelo de usuario para autenticacion
     * @type correo: string, pass: string
     */
    $scope.user = {
        usuario: '',
        pass: ''
    };

    /**
     * Realiza el login segun los parametros enviados
     */
    $scope.doLogin = function () {
        $state.go('app.usuarios');
     /*   auth.doLogin($scope.user.usuario, $scope.user.pass).then(function (data) {
            console.log(data);
            $state.go('app.usuarios');
            if (data.data.length === 0) {
                alert("El usuario o la contraseña son invalidos");
            }
            else {
                if (data.data[0].correo === $scope.user.correo) {

                    $timeout(function () {
                        $scope.logged = true;
                        $localStorage.user = data.data[0];
                        $scope.user = $localStorage.user;
                        $localStorage.logged = true;
                        $state.go('app.dashboard');
                    }, 0);


                }
                else {
                    alert("Error al iniciar sesion");
                }
            }
        });*/
    };

}
