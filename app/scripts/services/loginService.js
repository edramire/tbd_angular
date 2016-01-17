'use strict';

 angular.module('iServifast').factory('loginService',function($http, $location,$scope, sessionService){
	return{
		login:function(){
			var $promise=$http({
                method: 'POST',
                url: 'http://104.236.79.2:8181/Servifast/Usuario/login',
                data: {"username": $scope.user.usuario,"password":$scope.user.pass},
                headers: {'Content-Type': 'application/json'}
        }).success(function(data,status,headers,config){  
              console.log(data);
              //if (status=="OK"){                
              //    $location.path( "/home" );
              //}
              //else{
               //$location.path( "/login" ); 
              //}

            },
            function(error,status,headers,config){
                $scope.status = 'Error al consultar por usuarios';
                                        console.log(error)


            });

        //send data to user.php
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					//scope.msgtxt='Correct information';
					sessionService.set('uid',uid);
					$location.path('/home');
				}	       
				else  {
					scope.msgtxt='incorrect information';
					$location.path('/login');
				}				   
			});
		},
		logout:function(){
			sessionService.destroy('uid');
			$location.path('/login');
		},
	}

});