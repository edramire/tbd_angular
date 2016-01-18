(function(){
    angular.module('iServifast', ['ngRoute','uiGmapgoogle-maps','lumx','angularUtils.directives.dirDisqus','ngImgur'])
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
        .when('/tusservicios',{
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
    },
    function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAFE5936R9ePoVXnhYsb8DdFov77MwseGs',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    }) }
    );

})();

