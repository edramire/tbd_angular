    angular.module('iServifast').factory('helpService', ['$http', function($http){
  return{
    login2:function(){
      var nombre=sessionStorage.getItem("unombre");
      var id=$http({
                method: 'GET',
                url: 'https://104.236.79.2:8181/Servifast/Usuario/nombre/'+nombre,
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
    },
    check2:function(nombre){
      var id= $http({
                method: 'GET',
                url: 'https://104.236.79.2:8181/Servifast/Usuario/estado/'+nombre
        }).success(function(data,status,headers,config){  
              console.log(data);});
        return id;

    },
    check3:function(){
    var aux=sessionStorage.getItem("uestado");      
        if (aux.equals("1")){
          return false;
        }
        else{
          return true;
        }
    }

  };
}])