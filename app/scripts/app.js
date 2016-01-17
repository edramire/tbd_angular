(function(){
    angular.module('iServifast', ['ngRoute','lumx','angularUtils.directives.dirDisqus','ngImgur'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
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
    });

})();

