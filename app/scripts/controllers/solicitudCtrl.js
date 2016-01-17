(function(){
    angular.module('iServifast')
    .controller('solicitudCtrl', function($scope, solicitudService){
        $scope.solicitudes =[];
        $scope.newSolicitudes = [];
        $scope.form = {
                    descripcion:"",
                    duracion:'',
                    precio:'',
                    titulo:""
                };

        function getSolicitud(){
            solicitudService.getSolicitud()
            .success(function(data){
                $scope.solicitudes = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por solicitudes';
            });
        }
        getSolicitud();

        $scope.addPost = function (){
        var f = $scope.fix.dat;
        var reader = new FileReader();     

            // Keep a reference to the File in the FileReader so it can be accessed in callbacks
        
        reader.onload = function(e) {
            var dataURL = reader.result;
        }
        reader.readAsDataURL($scope.fix.data);
        var link= imgur.upload(reader);
        var $promise =$http({ 

            method: "POST",
            url: "https://104.236.79.2:8181/Servifast/Solicitud/crear/",
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


 
        }

        $scope.check = function(){     
                if (sessionStorage.getItem("unombre")){
                    return true;
                }
                else{
                    return false;
                }
        }
    });

  })();



