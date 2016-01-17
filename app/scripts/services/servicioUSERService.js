angular.module('iServifast')
    .service('servicioUSERService', function($http){
        this.getServicio = function(id){
            var urlBase = 'http://104.236.79.2:8181/Servifast/Oferta/users/'+id;
            return $http.get(urlBase);
        };
        this.getServicioDetail = function(servicioId){
            var urlBase = 'http://104.236.79.2:8181/Servifast/Oferta/';
            return $http.get(urlBase+servicioId);
        };

});
