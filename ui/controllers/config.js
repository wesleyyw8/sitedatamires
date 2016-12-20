app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider.
    when('/languages', {
      templateUrl: '../views/languages.html'
    }).
    when('/problems', {
      templateUrl: '../views/problems.html'
    }).
    when('/questions', {
      templateUrl: '../views/questions.html'
    }).
    when('/graph', {
      templateUrl: '../views/graph.html'
    }).
    otherwise({
      redirectTo: '/languages'
    });
}]);
