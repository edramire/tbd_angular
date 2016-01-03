(function(){
    angular.module('iServifast').controller('homeCtrl', function($scope, $http,$location,sessionService,helpService){
          	
        helpService.login2();

      	$scope.user = sessionStorage.getItem("unombre");      	 
      	$scope.id1=sessionStorage.getItem("uid");
    });
    
  } ) ();