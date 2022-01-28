angular.module('RDash').factory('auth', ['$http', '$cookieStore', '$localStorage', '$state', authFactory]);

function authFactory($http, $cookieStore, $localStorage, $state) {
    var auth = {};

    /**
     * Realiza el login con las credenciales dadas
     * @param usuario
     * @param pass
     */
    auth.doLogin = function (usuario, pass) {
        return $http({
            method: 'POST',
            url: 'http://localhost/admin-template/PHP/admin/Auth/doLogin.php',
            processData: false,
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append('usuario', usuario);
                formData.append('pass', pass);
                return formData;
            },
            headers: {
                'Content-Type': undefined
            }
        });

    };

    /**
     * Intenta realizar login si hay datos guardados
     */
    auth.checkSession = function () {
        console.log('checking session...');

        var user = $localStorage.user;
        if (user === null || user === undefined || !$localStorage.logged) {
            console.log('Not signed in');
            $state.go('login');
        }
        else {
            console.log('Welcome');
            auth.doLogin(user.usuario, user.pass);
        }
    };

    return auth;
}