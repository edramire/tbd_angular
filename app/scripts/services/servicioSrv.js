angular.module('iServifast')
    .service('servicioService', function($http){
        this.getServicio = function(){
            var urlBase = 'http://104.236.79.2:8181/Servifast/Oferta/';
            return $http.get(urlBase);
        };
        this.getServicioDetail = function(servicioId){
            var urlBase = 'http://104.236.79.2:8181/Servifast/Oferta/';
            return $http.get(urlBase+servicioId);
        };
        this.getSolicitudDetail = function(servicioId){
            var urlBase = 'http://104.236.79.2:8181/Servifast/Solicitud/';
            return $http.get(urlBase+servicioId);
        };
        this.addPost = function(idcat,idcom,descripcion,duracion,precio,titulo,idu){
            var request = $http({
            method: "post",
            url: "http://104.236.79.2:8181/Servifast/Oferta/crear/",
            data: {
                    "Categoria_idCategoria": 1,
                    "Comunidad_idComunidad": 1,
                    "descripcion": descripcion,
                    "duracion": duracion,
                    "precio": precio,
                    "titulo": titulo,
                    "Usuario_idUsuario": 1
                    },
            headers: {'Content-Type': 'application/json'
                    }
            });
            return ( request);
        };
        this.addVoto = function(servicioId,nota){
            var request= $http({
                         method: 'POST',
                        url: 'http://104.236.79.2:8181/Servifast/Voto/crear',
                        data: {"usuario_idUsuario":sessionStorage.getItem("uid"),
                               "servicio_idServicio":servicioId,
                               "calificacion":nota},
                        headers: {'Content-Type': 'application/json'}
                        });
                return (request);
        }; 
        this.addFavorito = function(servicioId){
            var request= $http({
                method:'POST',
                url: 'http://104.236.79.2:8181/Servifast/Favoritos/crear',
                data:{
                    "servicio_idServicio": servicioId,
                    "usuario_idUsuario": sessionStorage.getItem("uid")
                    
                },
                headers: {'Content-Type': 'application/json'}
            });
            return (request);

        }

});
