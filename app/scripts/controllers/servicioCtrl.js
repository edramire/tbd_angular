(function(){
    angular.module('iServifast')
    .controller('servicioCtrl', function($scope, servicioService,$filter,helpService){
        $scope.servicios =[];
        $scope.newServicio = [];
        $scope.date = $filter('date')(new Date(),'yyyy-MM-dd');
        $scope.form = {
                    descripcion:"",
                    duracion:'',
                    fecha: $scope.date,
                    precio:'',
                    titulo:"",
                };
        function getServicio(){
            servicioService.getServicio()
            .success(function(data){
                $scope.servicios = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }
        getServicio();

       $scope.addPost = function (){
            servicioService.addPost(1,
                1,
                $scope.form.descripcion,
                $scope.form.duracion,
                $scope.form.fecha,
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


