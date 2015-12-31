angular.module('iServifast')
    .service('servicioService', function($http){
        this.getServicio = function(){
            var urlBase = 'https://104.236.79.2:8181/Servifast/Oferta/';
            return $http.get(urlBase);
        };
        this.getServicioDetail = function(servicioId){
            var urlBase = 'https://104.236.79.2:8181/Servifast/Oferta/';
            return $http.get(urlBase+servicioId);
        };
        this.addPost = function(idcat,idcom,descripcion,duracion,fecha,precio,titulo,idu){
            var request = $http({
            method: "post",
            url: "https://104.236.79.2:8181/Servifast/Oferta/crear/",
            data: {
                    idcat: idcat,
                    idcom: idcom,
                    descripcion: descripcion,
                    duracion: duracion,
                    fecha: fecha,
                    precio: precio,
                    titulo: titulo,
                    idu: idu
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };
        this.addVoto = function(servicioId,nota){
            var request= $http({
                         method: 'POST',
                        url: 'https://104.236.79.2:8181/Servifast/Voto/crear',
                        data: {"idu": 9,
                               "ids": servicioId,
                               "nota":nota},
                        headers: {'Content-Type': 'application/json'}
                        });
                return (request);
        } 

});
