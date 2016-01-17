
    angular.module('iServifast')
    .controller('mostraruserCtrl', function($http, $scope, usuarioService){
        $scope.usuario =[];
        function getUsers(){
        var $promise =$http({ 

            method: "GET",
            url: "http://104.236.79.2:8181/Servifast/Usuario/"+sessionStorage.getItem("uid"),
            }).success(function(data,status,headers,config){  
                $scope.usuario=data;
              console.log(data);
            })
    };   

        getUsers();
        $scope.edit=function(){
        var $promise =$http({ 

            method: "PUT",
            url: "https://104.236.79.2:8181/Servifast/Usuario/edit_user/"+sessionStorage.getItem("uid"),
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            data:{
                "usuario":$scope.usuario.usuario,
                "mail":$scope.usuario.mail,
                "password":$scope.usuario.password,
                "apellido":$scope.usuario.apellido,
                "nombre":$scope.usuario.nombre,
                "direccion":$scope.usuario.direccion,
                "ciudad":$scope.usuario.ciudad,
                "comuna":$scope.usuario.comuna,
                "region":$scope.usuario.region
            }

            }).success(function(data,status,headers,config){  
              console.log(data);
            })
    };   
});

