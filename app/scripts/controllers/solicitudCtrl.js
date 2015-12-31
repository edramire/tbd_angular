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
            solicitudService.addPost(1,
                1,
                $scope.form.descripcion,
                $scope.form.duracion,
                $scope.form.precio,
                $scope.form.titulo,
                1)

            .success(function(data){
                $scope.servicio = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicio';
            });

                $scope.form.titulo="";
                $scope.form.descripcion="";
                $scope.form.precio="";
                $scope.form.duracion="";

 
        }
    });

  })();



