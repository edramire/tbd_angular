
    angular.module('iServifast')
    .controller('servicioCtrl', function($window,$scope, $http, servicioService,$filter,helpService,imgur){
        $scope.oferta={};
        $scope.fix={};
        function getServicio(){
            servicioService.getServicio()
            .success(function(data){
                $scope.servicios = data;
                console.log(data);
            })
            .error(function(error){
            });
        }      
        getServicio();
       $scope.addPost = function (){ 
        imgur.upload($scope.fix.dat).then(function then(model) {
            console.log('Your adorable cat be here: ' + model.link);
            var link=model.link;

        var $promise =$http({ 

            method: "POST",
            url: "https://104.236.79.2:8181/Servifast/Oferta/crear/",
            data: {
                    "categoria_idCategoria":$scope.oferta.CAT,
                    "comunidad_idComunidad":$scope.oferta.COM,
                    "precio":$scope.oferta.P,
                    "descripcion":$scope.oferta.D,
                    "duracion":$scope.oferta.DU,
                    "imagen":link,
                    "promedio":0,
                    "titulo":$scope.oferta.T,
                    "usuario_idUsuario":sessionStorage.getItem("uid")
                  },headers: {'Content-Type': 'application/json;charset=utf-8'}
            }).success(function(data,status,headers,config){  
              console.log(data);
            })

        });


 
        }

        $scope.check = function(){     
                if (sessionStorage.getItem("unombre")){
                    return true;
                }
                else{
                    return false;
                }
        },


    $scope.check3=function(){
    var aux=sessionStorage.getItem("uestado");      
        if (angular.equals(aux,"1")){
          return false;
        }
        else{
          return true;
        }
    }
    });
    
    


