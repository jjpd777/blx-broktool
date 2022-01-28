/**
 * Master Controller
 */

angular.module('RDash')
    .controller('pagosCtrl', ['$scope', '$uibModal', '$timeout', 'pagos', 'auth', '$ngConfirm', pagosCtrl]);


function pagosCtrl($scope, $uibModal, $timeout, pagos, auth, $ngConfirm) {

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
     * Objeto principal del contorlador, varia dependiendo del que se desea consultar
     * @type {{nombre: string, curp: string, profesion: string, celular: string, correo: string, pass: string}}
     */
    $scope.usuario = {
        usuario: '',
        pass: '',
        pass2: ''
    };

    /**
     * Funcion para mostrar una notificacion de exito
     * @param mensaje
     */
    $scope.show_success = function (mensaje) {
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
    $scope.getPagos = function () {
        pagos.getPagos().then(function (data) {
           // console.log(data.data)
            $scope.pagos = data.data;
        });
    };

    /**
     * Realiza las busquedas necesarias, eso apenas carga la pantalla
     */
    $scope.getPagos();



    $scope.validarEntrega = function (pago,txt) {

        $scope.usuarioS = pago;

        var btn_color="btn-success"
        var content_txt="Se entregará el producto #{{usuarioS.id_pago}} de {{usuarioS.producto}}"
        var success_msg="Entrega de producto validada correctamente"
        var error_msg = "Error al validar entrega"
        var btn_txt = "Entregar"

        if(txt=="CANCELADO")
        {
            btn_color = "btn-red"
            content_txt = "Se cancelará el producto #{{usuarioS.id_pago}} de {{usuarioS.producto}}"
            success_msg = "Entrega de producto cancelada correctamente"
            error_msg = "Error al cancelar entrega"
            btn_txt = "Cancelar"
        }

        console.log(pago);
        $ngConfirm({
            title: 'Atención!',
            content: content_txt,
            scope: $scope,
            buttons: {
                aceptar: {
                    text: btn_txt,
                    btnClass: btn_color,
                    action: function (scope, button) {
                        pagos.validarEntrega(pago,txt).then(function (data) {
                            //console.log('Validar pago', data);
                            if (data.data === '1') {
                                $scope.show_success(success_msg);
                                $scope.getPagos();
                            }
                            else {
                                $scope.show_error(error_msg);
                            }
                        });
                        return true; // prevent close;
                    }
                },
                close: {
                    text: 'Cancelar',
                    btnClass: 'btn-blue',
                    action: function (scope, button) {
                        // closes the modal
                    }
                }
            }
        });

    };



}
