   angular.module('iServifast')
    .controller('solicituddetalleCtrl', function($scope, servicioService,$routeParams, $http,helpService){
        $scope.solicitud =[];
        $scope.loaded= false;
        $scope.form = {
                    nota:""
                }
        function getServicioDetail(){
            servicioService.getSolicitudDetail($routeParams.servicioId)            
            .success(function(data){
                $scope.solicitud = data;
                console.log(data);
                $scope.loaded= true;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }
        getServicioDetail();
       
        $scope.check = function(){     
                if (sessionStorage.getItem("unombre")){
                    return true;
                }
                else{
                    return false;
                }
        }

      
    });