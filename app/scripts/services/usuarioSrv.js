angular.module('iServifast')
    .service('usuarioService', function($http,$routeParams){
        this.getUsers = function(){
            var urlBase = 'https://104.236.79.2:8181/Servifast/Usuario/'+$routeParams.id;
            return $http.get(urlBase);
        };

        this.addPost = function(apellido,ciudad,comuna,direccion,mail,nombre,password,region,usuario){
              var request = $http({
            method: "post",
            url: "https://104.236.79.2:8181/Servifast/Usuario/crear/",
            data: {
                    apellido: apellido,
                    ciudad: ciudad,
                    comuna: comuna,
                    direccion: direccion,
                    mail: mail,
                    nombre: nombre,
                    password: password,
                    region: region,
                    usuario: usuario
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });