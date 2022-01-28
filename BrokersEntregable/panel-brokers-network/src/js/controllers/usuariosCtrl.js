/**
 * Master Controller
 */

angular.module('RDash')
    .controller('usuariosCtrl', ['$scope', '$uibModal', '$timeout', 'usuarios', 'auth', '$ngConfirm', usuariosCtrl]);


function usuariosCtrl($scope, $uibModal, $timeout, usuarios, auth, $ngConfirm) {

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
    $scope.getUsuarios = function () {
        usuarios.getUsuarios().then(function (data) {
            console.log(data.data)
            $scope.usuarios = data.data;
        });
    };

    /**
     * Funcion para abrir y crear un nuevo objeto principal
     */
    $scope.abrirNewUsuario = function () {

        //Declara instancia de modal para presentarlo
        $scope.modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/app/usuarios/crear.html',
            size: 'lg',
            controller: ['$scope', '$uibModalInstance', 'usuarios', function ($scope, $uibModalInstance, usuarios) {

                $scope.mensaje = {
                    status: 1,
                    mensaje: ''
                };

/*
                $scope.checkModel = {
                    usuario: false,
                    admin: false,
                    superadmin: false,
                };

                $scope.checkResults = [];

                $scope.$watchCollection('checkModel', function () {
                    $scope.checkResults = [];
                    angular.forEach($scope.checkModel, function (value, key) {
                        if (value) {
                            $scope.checkResults.push(key);
                        }
                    });
                });*/


                /**
                 * Realiza la captura del objeto a la base de datos
                 */
                $scope.agregarUsuario = function () {

                    if ($scope.usuario.pass === $scope.usuario.pass2) {
                        usuarios.agregarUsuario($scope.usuario.usuario, $scope.usuario.pass, JSON.stringify($scope.usuario.permisos))
                            .then(function (data) {
                                //Dependiendo de la respuesta del servidor, se genera una respuesta
                                if (data.data === '1') {
                                    $scope.mensaje.mensaje = 'Se ha creado correctamente el usuario';
                                    $scope.mensaje.status = 1;
                                    $uibModalInstance.close($scope.mensaje);
                                }
                                else {
                                    $scope.mensaje.mensaje = 'Error al crear el usuario';
                                    $scope.mensaje.status = 0;
                                    $uibModalInstance.close($scope.mensaje);
                                }
                            });
                    }
                    else {
                        alert('Las contraseñas debe coincidir!');
                    }
                };

                /**
                 * Cierra el modal sin generar cambios
                 */
                $scope.cancel = function () {
                    $uibModalInstance.close();
                };

            }]
        });

        //Genera una accion dependiento del cierre del modal
        $scope.modalInstance.result.then(function (data) {
            //console.log(data);
            if (data !== undefined) {
                if (data.status === 1) {
                    $scope.show_success(data.mensaje);
                }
                else {
                    $scope.show_error(data.mensaje);
                }
            }

            //Vuelve a recargar los datos para refrescar la tabla
            $scope.getUsuarios();
        }, function () {
        });
    };

    /**
     * Funcion para abrir y editar un objeto principal seleccionado desde la tabla
     * @param usuario (objeto)
     */
    $scope.abrirVerUsuario = function (usuario) {

      /*  usuario.permisos = JSON.parse(usuario.permisos);*/

        //Nueva instancia de modal
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/app/usuarios/ver.html',
            size: 'lg',
            controller: ['$scope', '$uibModalInstance', 'usuario', function ($scope, $uibModalInstance, usuario) {

                $scope.mensaje = {
                    status: 1,
                    mensaje: ''
                };
                $scope.usuario = usuario;

                $scope.checkModel = {
                    usuario: false,
                    admin: false,
                    superadmin: false
                };

                $scope.checkResults = [];

               /* $scope.$watchCollection('checkModel', function () {
                    $scope.checkResults = [];
                    angular.forEach($scope.checkModel, function (value, key) {
                        if (value) {
                            $scope.checkResults.push(key);
                        }
                    });
                });

                $scope.usuario.permisos.forEach(function (value) {
                    console.log(value);
                    if(value === 'usuario')
                        $scope.checkModel.usuario = true;
                    if(value === 'admin')
                        $scope.checkModel.admin = true;
                    if(value === 'superadmin')
                        $scope.checkModel.superadmin = true;
                });*/

                $scope.editarUsuario = function () {
                    //console.log($scope.usuario);

                    if ($scope.usuario.pass2 !== undefined) {
                        if ($scope.usuario.pass === $scope.usuario.pass2) {
                            usuarios.editarUsuario($scope.usuario.id_usuario, $scope.usuario.usuario, $scope.usuario.pass)
                                .then(function (data) {
                                    //console.log(data);
                                    if (data.data === '1') {
                                        $scope.mensaje.mensaje = 'Se ha editado correctamente el usuario';
                                        $scope.mensaje.status = 1;
                                        $uibModalInstance.close($scope.mensaje);
                                    }
                                    else {
                                        $scope.mensaje.mensaje = 'Error al editar el usuario';
                                        $scope.mensaje.status = 0;
                                        $uibModalInstance.close($scope.mensaje);
                                    }
                                });
                        }
                        else {
                            alert('Las contraseñas debe coincidir!');
                        }
                    }
                    else {
                        usuarios.editarUsuario($scope.usuario.id_usuario, $scope.usuario.usuario, $scope.usuario.pass)
                            .then(function (data) {
                                //console.log(data);
                                if (data.data === '1') {
                                    $scope.mensaje.mensaje = 'Se ha editado correctamente el usuario';
                                    $scope.mensaje.status = 1;
                                    $uibModalInstance.close($scope.mensaje);
                                }
                                else {
                                    $scope.mensaje.mensaje = 'Error al editar el usuario';
                                    $scope.mensaje.status = 0;
                                    $uibModalInstance.close($scope.mensaje);
                                }
                            });
                    }
                };

                //Cierra sin realizar cambios
                $scope.cancel = function () {
                    $uibModalInstance.close();
                }

            }],
            resolve: {
                usuario: function () {
                    //Se le pasa al modal el objeto consultado
                    return usuario;
                }
            }
        });

        modalInstance.result.then(function (data) {
            //console.log(data);
            if (data !== undefined) {
                if (data.status === 1) {
                    $scope.show_success(data.mensaje);
                }
                else {
                    $scope.show_error(data.mensaje);
                }
            }
            $scope.getUsuarios();
        }, function () {
        });
    };

    /**
     * Funcion para eliminar el objeto principal deleccionado desde la tabla
     * Confirma la decision
     * @param usuario
     */
    $scope.eliminarUsuario = function (usuario) {

        $scope.usuarioS = usuario;

        console.log(usuario);
        $ngConfirm({
            title: 'Atención!',
            content: 'Se eliminará el usuario {{usuarioS.usuario}}',
            scope: $scope,
            buttons: {
                aceptar: {
                    text: 'Eliminar',
                    btnClass: 'btn-red',
                    action: function (scope, button) {
                        usuarios.eliminarUsuario(usuario).then(function (data) {
                            console.log('Eliminar usuario', data);
                            if (data.data === '1') {
                                $scope.show_success('Usuario eliminado correctamente');
                                $scope.getUsuarios();
                            }
                            else {
                                $scope.show_error('Error al eliminar usuario');
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

    /**
     * Realiza las busquedas necesarias, eso apenas carga la pantalla
     */
    $scope.getUsuarios();

}
