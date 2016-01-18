(function(){
    angular.module('iServifast').controller('logCtrl', function($scope, $http,$location){
      
        $scope.usuario =[];
      $scope.addLog = function (){
      $http({
                method: 'POST',
                url: 'http://104.236.79.2:8181/Servifast/Usuario/login',
                data: {"username": $scope.newUser.usuario,"password":$scope.newUser.password},
                headers: {'Content-Type': 'application/json'}
        }).success(function(data,status,headers,config){  
              console.log(data);
              if (status=="OK"){                
                  $location.path( "/home" );
              }
              else{
               $location.path( "/login" ); 
              }

            },
            function(error,status,headers,config){
                $scope.status = 'Error al consultar por usuarios';
                                        console.log(error)


            });

        }
        function getUsers(){
        var $promise =$http({ 

            method: "GET",
            url: "http://104.236.79.2:8181/Servifast/Usuario/"+sessionStorage.getItem("uid"),
            }).success(function(data,status,headers,config){  
                $scope.usuario=data;
              console.log(data);
            })
    };   
    });
    
  } ) ();