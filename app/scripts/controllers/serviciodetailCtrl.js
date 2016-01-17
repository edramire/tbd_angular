   angular.module('iServifast')
    .controller('serviciodetailCtrl', function($scope, servicioService,$routeParams, $http,helpService){
        $scope.servicio =[];
        $scope.loaded= false;
        $scope.form = {
                    nota:""
                }
                function RatingController() {
    this.rating1 = 5;
    this.rating2 = 2;
    this.isReadonly = true;
    this.rateFunction = function(rating) {
      console.log('Rating selected: ' + rating);
    };
  }

  $scope.ratings = [{
        current: 5,
        max: 10
    }, {
        current: 3,
        max: 5
    }];
        function getServicioDetail(){
            servicioService.getServicioDetail($routeParams.servicioId)
            .success(function(data){
                $scope.servicio = data;
                console.log(data);
                $scope.loaded= true;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }
        getServicioDetail();

        function addVoto(nota){
            servicioService.addVoto($routeParams.servicioId,nota)
            .success(function(data){
                $scope.voto = data;
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });

        }
        
        $scope.check = function(){     
                if (sessionStorage.getItem("unombre")){
                    return true;
                }
                else{
                    return false;
                }
        }

        $scope.addFavorito = function(){
            servicioService.addFavorito($routeParams.servicioId)
            .success(function(data){
                console.log(data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por servicios';
            });
        }

    });
