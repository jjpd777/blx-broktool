/**
 * Pos Controller
 */

angular.module('RDash')
    .controller('posCtrl', ['$scope', '$uibModal', '$timeout', 'auth', posCtrl]);

function posCtrl($scope, $uibModal, $timeout, auth) {

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


    $scope.search = '';

    $scope.prod = {
        selected: {}
    };

    $scope.formasPago = ['Efectivo', 'Tarjeta', 'Cheque'];

    $scope.error = {
        status: false,
        mensaje: ''
    };
    $scope.success = {
        status: false,
        mensaje: ''
    };

    $scope.producto = {
        nombre: '',
        descripcion: '',
        precio: 0,
        cantidad: 1
    };

    $scope.corte = {
        pagos: {},
        ingresos: {}
    };

    $scope.desgloce = [];

    $scope.conceptos = [];
    $scope.alumnos = [];
    $scope.productos = [];
    $scope.productos_temp = [];
    $scope.conceptos_temp = [];

    $scope.pago = {
        conceptos: [],
        total: 0,
        forma_pago: 'Efectivo',
        comentarios: ''
    };

    $scope.abrirNewProducto = function () {

        $scope.modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/app/pos/crear.html',
            size: 'lg',
            controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

                $scope.mensaje = {
                    status: 1,
                    mensaje: ''
                };
                $scope.agregarProducto = function () {
                    //console.log($scope.producto);

                    $http({
                        method: 'POST',
                        url: 'http://localhost/ipefh-panel/PHP/admin/Productos/agregarProductos.php',
                        processData: false,
                        transformRequest: function (data) {
                            var formData = new FormData();
                            formData.append('nombre', $scope.producto.nombre);
                            formData.append('descripcion', $scope.producto.descripcion);
                            formData.append('precio', $scope.producto.precio);
                            return formData;
                        },
                        headers: {
                            'Content-Type': undefined
                        }
                    })
                        .then(function (data) {
                            //console.log(data);
                            if (data.data === '1') {
                                $scope.mensaje.mensaje = 'Se ha creado correctamente el producto';
                                $scope.mensaje.status = 1;
                                $uibModalInstance.close($scope.mensaje);
                            }
                            else {
                                $scope.mensaje.mensaje = 'Error al crear el producto';
                                $scope.mensaje.status = 0;
                                $uibModalInstance.close($scope.mensaje);
                            }
                        });

                };

                $scope.cancel = function () {
                    $uibModalInstance.close();
                }

            }]
        });

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
            $scope.getProductos();
        }, function () {
        });
    };

    $scope.abrirVerProducto = function (producto) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/app/pos/ver.html',
            size: 'lg',
            controller: ['$scope', '$uibModalInstance', 'producto', function ($scope, $uibModalInstance, producto) {

                $scope.mensaje = {
                    status: 1,
                    mensaje: ''
                };
                $scope.producto = producto;

                $scope.editarProducto = function () {
                    //console.log($scope.producto);
                    $http({
                        method: 'POST',
                        url: 'http://localhost/ipefh-panel/PHP/admin/Productos/editarProductos.php',
                        processData: false,
                        transformRequest: function (data) {
                            var formData = new FormData();
                            formData.append('id_producto', $scope.producto.id_producto);
                            formData.append('nombre', $scope.producto.nombre);
                            formData.append('descripcion', $scope.producto.descripcion);
                            formData.append('precio', $scope.producto.precio);
                            return formData;
                        },
                        headers: {
                            'Content-Type': undefined
                        }
                    })
                        .then(function (data) {
                            //console.log(data);
                            if (data.data === '1') {
                                $scope.mensaje.mensaje = 'Se ha editado correctamente el producto';
                                $scope.mensaje.status = 1;
                                $uibModalInstance.close($scope.mensaje);
                            }
                            else {
                                $scope.mensaje.mensaje = 'Error al editar el producto';
                                $scope.mensaje.status = 0;
                                $uibModalInstance.close($scope.mensaje);
                            }
                        });
                };

            }],
            resolve: {
                producto: function () {
                    return producto;
                }
            }
        });

        modalInstance.result.then(function (data) {
            //console.log(data);
            if (data.status === 1) {
                $scope.show_success(data.mensaje);
            }
            else {
                $scope.show_error(data.mensaje);
            }
            $scope.getProductos();
        }, function () {
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.agregarConceptoPago = function () {

        if($scope.producto.nombre !== '' && $scope.producto.descripcion !== '' && $scope.producto.precio !== 0){

            $scope.pago.conceptos.push(angular.copy($scope.producto));
            $scope.actualizarTotalPago();

            $scope.producto = {
                nombre: '',
                descripcion: '',
                precio: 0,
                cantidad: 1
            };
        }

    };

    $scope.quitarConceptoPago = function (concepto) {

        //console.log('Concepto', concepto);
        //console.log('Conceptos antes', $scope.pago.conceptos);

        $scope.pago.conceptos.forEach(function (p, i) {
            if (p.id_producto === concepto.id_producto) {
                $scope.pago.conceptos.splice(i, 1);
                $scope.conceptos_temp.push(concepto);
            }
        });
        //console.log('Conceptos despues', $scope.pago.conceptos);

        $scope.actualizarTotal();

    };

    $scope.actualizarTotalPago = function () {
        $scope.pago.total = 0;

        if ($scope.pago.conceptos.length > 0) {
            $scope.pago.conceptos.forEach(function (value) {
                $scope.pago.total += parseInt(value.precio) * value.cantidad;
            });
        }

    };


}
