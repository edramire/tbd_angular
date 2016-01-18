(function(){
    angular.module('iServifast').controller('homeCtrl', function($scope, $http,$location,sessionService,helpService){
          	
        helpService.login2();
        $scope.estado=sessionStorage.getItem("uestado")
        $scope.idu=sessionStorage.getItem("uid")
        $scope.nombre=sessionStorage.getItem("unombre")

    });
    
  } ) ();