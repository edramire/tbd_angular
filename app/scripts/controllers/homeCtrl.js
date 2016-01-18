(function(){
    angular.module('iServifast').controller('homeCtrl', function($scope, $http,$location,sessionService,helpService){
          	
        helpService.login2();

    });
    
  } ) ();