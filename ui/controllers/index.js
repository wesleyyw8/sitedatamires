var app = angular.module('tamiresApp' , ['ngRoute']);
app.controller('indexController', ['$scope','$location', function($scope, $location){
  $scope.$watch(function(){
  	return $location.path();
  }, function(newVal){
  	if (newVal){
  		switch (newVal) {
  		  case "/languages":
  		    $scope.title = "Languages";
  		    break; 
  		  case "/problems":
  		    $scope.title = "Problems";
  		    break; 
  		  case "/questions":
  		    $scope.title = "Questions";
  		    break; 
  		  default: 
  		    $scope.title = ""; break;
  		}
  	}
  		
  });
}]);