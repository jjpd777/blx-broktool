angular.module('RDash').factory('pagos', ['$http','$rootScope', pagosFactory]);

function pagosFactory($http,$rootScope) {
    var pagos = {};

    //var urlUsuarios = 'http://localhost/admin-template/PHP/admin/Usuarios/';

    pagos.getPagos = function () {
        return $http({
            method: 'POST',
            url: $rootScope.urlMain + 'Pagos/getPagos.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });
    };

    pagos.validarEntrega = function (pago,txt) {
        return $http({
            method: 'POST',
            url: $rootScope.urlMain + 'Pagos/validarEntrega.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append('id_pago', pago.id_pago);
                formData.append('txt', txt);
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });
    };

    return pagos;
}
