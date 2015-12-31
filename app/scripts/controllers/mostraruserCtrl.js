(function(){
    angular.module('iServifast')
    .controller('mostraruserCtrl', function($scope, usuarioService){
        $scope.usuario =[];
        function getUsers(){
            usuarioService.getUsers()
            .success(function(data){
                $scope.usuario = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });
        }
        getUsers();
    });

  })();
