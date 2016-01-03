(function(){
    angular.module('iServifast', ['ngRoute','lumx','angularUtils.directives.dirDisqus'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller:'homeCtrl'
          })
        .when('/Login', {
            templateUrl:'views/login2.html',
            controller:'loginCtrl'
        })
        .when('/Usuario/:id', {
            templateUrl: 'views/mostraruser.html',
            controller: 'mostraruserCtrl'
          })

        .when('/Registro', {
            templateUrl: 'views/registro.html',
            controller: 'registroCtrl'
          })
        .when('/Solicitud', {
            templateUrl: 'views/solicitud.html',
            controller: 'solicitudCtrl'
          })
        .when('/Servicio', {
            templateUrl: 'views/servicio.html',
            controller: 'servicioCtrl'
          })
        .when('/Servicio/:servicioId', {
            templateUrl: 'views/serviciodetail.html',
            controller: 'serviciodetailCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();

