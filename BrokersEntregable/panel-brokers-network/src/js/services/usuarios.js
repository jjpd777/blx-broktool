angular.module('RDash').factory('usuarios', ['$http','$rootScope', usuariosFactory]);

function usuariosFactory($http,$rootScope) {
    var usuarios = {};

    //var urlUsuarios = 'http://localhost/admin-template/PHP/admin/Usuarios/';

    usuarios.getUsuarios = function () {
        return $http({
            method: 'POST',
            url: $rootScope.urlMain + 'Usuarios/getUsuarios.php',
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

    usuarios.agregarUsuario = function (usuario, pass, permisos) {


        return $http({
            method: 'POST',
            url: urlUsuarios + 'agregarUsuario.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append('usuario', usuario);
                formData.append('pass', pass);
                formData.append('permisos', permisos);
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });
    };

    usuarios.editarUsuario = function (id, usuario, pass) {
        return $http({
            method: 'POST',
            url: urlUsuarios + 'editarUsuario.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append('id_usuario', id);
                formData.append('usuario', usuario);
                formData.append('pass', pass);
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });
    };

    usuarios.eliminarUsuario = function (usuario) {
        return $http({
            method: 'POST',
            url: urlUsuarios + 'eliminarUsuario.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append('id_usuario', usuario.id_usuario);
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });
    };

    return usuarios;
}
