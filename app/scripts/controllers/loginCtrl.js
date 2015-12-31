(function(){
    angular.module('iServifast')
    .controller('logCtrl', function($scope, $http,$location){
      $scope.addLog = function (){
      $http({
                method: 'POST',
                url: 'https://104.236.79.2:8181/Servifast/Usuario/login',
                data: {"username": $scope.newUser.usuario,"password":$scope.newUser.password},
                headers: {'Content-Type': 'application/json'}
        }).then(function(data,status,headers,config){
                
                          $location.path( "/home" );

                console.log(data)


            },
            function(error,status,headers,config){
                $scope.status = 'Error al consultar por usuarios';
                                        console.log(error)


            });

        }
    });
    
  })();