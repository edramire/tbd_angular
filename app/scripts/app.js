(function(){
    angular.module('iServifast', ['ngRoute','lumx','angularUtils.directives.dirDisqus','ngImgur'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller:'homeCtrl'
          })
        .when('/Login', {
            templateUrl:'HTML/login.html',
            controller:'loginCtrl'
        })
        .when('/Usuario/:id', {
            templateUrl: 'views/mostraruser.html',
            controller: 'mostraruserCtrl'
          })

        .when('/Registro', {
            templateUrl: 'HTML/crear-cuenta.html',
            controller: 'registroCtrl'
          })

        .when('/editar_servicio/:servicioId',{
            templateUrl: 'views/edit_servicio.html',
            controller: 'edit_servicioCtrl.js'
        })

        .when('/Solicitud', {
            templateUrl: 'views/solicitud.html',
            controller: 'solicitudCtrl'
          })
        .when('/Servicio', {
            templateUrl: 'HTML/servicio.html',
            controller: 'servicioCtrl'
          })
        .when('/SolicitudAdmin', {
            templateUrl: 'views/adminsolicitud.html',
            controller: 'solicitudCtrl'
          })
        .when('/ServicioAdmin', {
            templateUrl: 'views/adminservicio.html',
            controller: 'servicioCtrl'
          })

        .when('/Perfil', {
            templateUrl: 'HTML/perfil.html',
            controller: 'mostraruserCtrl'
          })
        .when('/Servicio/:servicioId', {
            templateUrl: 'views/serviciodetail.html',
            controller: 'serviciodetailCtrl'
          })      
        .when('/Solicitud/:servicioId', {
            templateUrl: 'views/solicituddetalle.html',
            controller: 'solicituddetalleCtrl'
          })
        .when('/TusServicios',{
            templateUrl: 'views/userservices.html',
            controller: 'servicioUSERCtrl'
        })
        .when('/Favoritos',{
            templateUrl: 'views/favoritos.html',
            controller: 'favoritoCtrl'
        })
        .otherwise({
            redirectTo: '/home'
          });
    }
    );

})();

