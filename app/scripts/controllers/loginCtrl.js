 angular.module('iServifast').controller('loginCtrl',function($http, $location,$scope,helpService){
	 	
        $scope.usuario ={};

        function getUsers(){
        var $promise =$http({ 

            method: "GET",
            url: "http://104.236.79.2:8181/Servifast/Usuario/"+sessionStorage.getItem("uid"),
            }).success(function(data,status,headers,config){  
                $scope.usuario=data;
              console.log(data);
            })
    };	
		$scope.login=function(){
			var $promise=$http({
                method: 'POST',
                url: 'http://104.236.79.2:8181/Servifast/Usuario/login',
                data: {"username": $scope.user.usuario,"password":$scope.user.pass},
                headers: {'Content-Type': 'application/json'}
        }).success(function(data,status,headers,config){  
              console.log(data);

				if($scope.user.usuario){
					sessionStorage.setItem('unombre',$scope.user.usuario);
					$location.path('/home');
				}	       
				else  {
					$location.path('/login');
				}

            },
            function(error,status,headers,config){
                $scope.status = 'Error al consultar por usuarios';
                                        console.log(error)


            });
		}


	

});