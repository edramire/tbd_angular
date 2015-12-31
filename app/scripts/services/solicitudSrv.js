angular.module('iServifast')
    .service('solicitudService', function($http){
        var urlBase = 'https://104.236.79.2:8181/Servifast/Solicitud/';
        this.getSolicitud = function(){
            return $http.get(urlBase);
        };
         this.addPost = function(idcat,idcom,descripcion,duracion,precio,titulo,idu){
            var request = $http({
            method: "post",
            url: "https://104.236.79.2:8181/Servifast/Solicitud/crear/",
            data: {
                    idcat: idcat,
                    idcom: idcom,
                    descripcion: descripcion,
                    duracion: duracion,
                    precio: precio,
                    titulo: titulo,
                    idu: idu
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

});