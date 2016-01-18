(function(){
    angular.module('iServifast')
    .controller('edit_servicioCtrl', function($scope, servicioService,helpService,$routeParams,$http){
        $scope.servicios =[];
        function getPosts(){
        var $promise =$http({ 

            method: "GET",
            url: "http://104.236.79.2:8181/Servifast/Oferta/"+$routeParams.servicioId,
            }).success(function(data,status,headers,config){  
                $scope.servicios=data;
              console.log(data);
            })
    };   

        getPosts();
 

        $scope.editPost = function(){
               $http({
            method: "PUT",
            url: "http://104.236.79.2:8181/Servifast/Oferta/edit_core/"+$routeParams.servicioId,
            data: {
           
                    "precio":$scope.servicios.precio,
                    "descripcion":$scope.servicios.descripcion,
                    "duracion":$scope.servicios.duracion,
                    "titulo":$scope.servicios.titulo,
                    "usuario_idUsuario":sessionStorage.getItem("uid"),
                    "estado":1 
                    },
            headers: {'Content-Type': 'application/json'}
            })
            .success(function(data){

                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }

    });
    
    
  })();

