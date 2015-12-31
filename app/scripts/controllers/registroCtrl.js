(function(){
    angular.module('iServifast')
    .controller('registroCtrl', function($scope, $http,usuarioService){
          $scope.newUsuario = [];
          $scope.form = {
                    apellido: "",
                    ciudad: "",
                    comuna: "",
                    direccion: "",
                    mail: "",
                    nombre: "",
                    password: "",
                    region: "",
                    usuario: ""
                };
              
        $scope.addPost = function (){
            usuarioService.addPost($scope.form.apellido,
                $scope.form.ciudad,
                $scope.form.comuna,
                $scope.form.direccion,
                $scope.form.mail,
                $scope.form.nombre,
                $scope.form.password,
                $scope.form.region,
                $scope.form.usuario)

            .success(function(data){
                $scope.usuario = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });

                $scope.form.apellido="";
                $scope.form.ciudad="";
                $scope.form.comuna="";
                $scope.form.direccion="";
                $scope.form.mail="";
                $scope.form.nombre="";
                $scope.form.password="";
                $scope.form.region="";
                $scope.form.usuario="";
        }


    });
    
})();


