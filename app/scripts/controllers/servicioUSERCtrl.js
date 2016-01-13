angular.module('iServifast')
    .controller('servicioUSERCtrl', function($scope, $http, servicioUSERService,$filter,helpService){
        $scope.oferta={};
        function getServicio(){
            servicioUSERService.getServicio(sessionStorage.getItem("uid"))
            .success(function(data){
                $scope.servicios = data;
                console.log(data);
            })
            .error(function(error){
            });
        }      
        getServicio();
        $scope.check = function(){     
                if (sessionStorage.getItem("unombre")){
                    return true;
                }
                else{
                    return false;
                }
        }
    });