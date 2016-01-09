    angular.module('iServifast').factory('helpService', ['$http', function($http){
  return{
    login2:function(){
      var nombre=sessionStorage.getItem("unombre");
      var id=$http({
                method: 'GET',
                url: 'https://104.236.79.2:8181/Servifast/Usuario/'+nombre,
                headers: {'Content-Type': 'application/json'}
        }).success(function(data,status,headers,config){  
              console.log(data);                
        sessionStorage.setItem('uid',data);            

            },
            function(error,status,headers,config){


            });


        },

    check:function(){
    var aux=sessionStorage.getItem("uid");      
        if (aux){
          return true;
        }
        else{
          return false;
        }
    }
  };
}])