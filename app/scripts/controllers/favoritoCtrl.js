angular.module('iServifast')
    .controller('favoritoCtrl', function($scope, $http, servicioUSERService,$filter,helpService){
        $scope.servicios={};
        function getServicio(){
            servicioUSERService.Favorito(sessionStorage.getItem("uid"))
            .success(function(data){
                $scope.servicios = data;
                console.log(data);
            })
            .error(function(error){
            });
        }      
        getServicio();  
    });