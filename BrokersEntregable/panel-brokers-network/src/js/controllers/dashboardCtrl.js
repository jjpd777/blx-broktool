/**
 * Dashboard Controller
 */

angular.module('RDash')
    .controller('dashboardCtrl', ['$scope', '$uibModal', '$timeout', 'auth', dashboardCtrl]);

function dashboardCtrl($scope, $uibModal, $timeout, auth) {

    /**
     * Elementos de control de sesiones
     * Verifica si hay algun usuario en la sesion
     */
    //auth.checkSession();

    /**
     * Objetos para las notificaciones
     * Al cambiar el status se habilitan la correspondiente notificacion (suceso erroneo o satisfactorio)
     * Se muestra el mensaje determinado
     * @type {{status: boolean, mensaje: string}}
     */
    $scope.error = {
        status: false,
        mensaje: ''
    };
    $scope.success = {
        status: false,
        mensaje: ''
    };

    /**
     * Variable de parametros de busqueda en tabla
     * @type {string}
     */
    $scope.search = '';

    /**
     * Funcion para mostrar una notificacion de exito
     * @param mensaje
     */
    $scope.show_success = function(mensaje){
        $scope.success.status = true;
        $scope.success.mensaje = mensaje;

        //console.log($scope.success);

        $timeout(function () {
            $scope.error = {
                status: false,
                mensaje: ''
            };
            $scope.success = {
                status: false,
                mensaje: ''
            };
        }, 2000)
    };

    /**
     * Funcion para mostrar una notificacion de error
     * @param mensaje
     */
    $scope.show_error = function (mensaje) {
        $scope.error.status = true;
        $scope.error.mensaje = mensaje;

        $timeout(function () {
            $scope.error = {
                status: false,
                mensaje: ''
            };
            $scope.success = {
                status: false,
                mensaje: ''
            };
        }, 2000)
    };

    /**
     * Funcion para solicitar datos del servidor
     */
    $scope.getDatos = function () {
        $scope.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.seriesBar = ['Series A', 'Series B'];

        $scope.dataBar = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.dataPie = [300, 500, 100];

    };

    /**
     * Realiza las busquedas necesarias, eso apenas carga la pantalla
     */
    $scope.getDatos();

}
