angular.module('BreadNButter.controllers', [])
.controller('WelcomeController', ['$scope', '$location', '$timeout', '$anchorScroll', 'Smooth', function ($scope, $location, $timeout, $anchorScroll, Smooth) {
  //TODO: search bar functionality
  //TODO: login/UserService control

  $scope.search = function() {
    // let searchlength = $scope.searchbox1;
    // console.log(searchlength.length);
    if ( true ){
    $timeout(function () {
    $location.path('/search/' + $scope.searchbox1); // + ", " + $scope.searchbox2
    $location.hash('bottom');
    Smooth.scrollTo('bottom'); }, 600);
  }
}

  $scope.searchMore = function() {
    // $location.path('localhost:3000/search/' + searchVar + "&page=2");
    // $location.replace('/search/' + $scope.searchbox1 + '&page=2');
    console.log(1);
  }

  $scope.goToSingle = function() {
    $location.path('/recipe/:id');
  }
}])
.controller('SearchResultsController', ['$scope', '$timeout', '$location', 'Recipes', 'Ingredients', '$routeParams', 'Smooth', function($scope, $timeout, $location, Recipes, Ingredients, $routeParams, Smooth) {
  $scope.recipe = Ingredients.query({ id: $routeParams.id }, {id: "array"});
  // console.log($location.hash());
  // console.log(location.pathname);
  // console.log(2);
  let num = 2;

  $scope.searchMore = function() {
    // $location.path(location.pathname + '&page=2');
    let clicks = 1;
    $timeout(function () {
      let clicks = 1;
      $location.path(location.pathname + '&page=' + (1 + clicks));
      $location.hash('bottom');
      Smooth.scrollTo('bottom'); }, 600);

      clicks++;
  }
  //TODO setup functionality to get to page 3+
  //TODO IF ELSE where # of times functions has been called is > 1
    
}])
.controller('SinglePageController', function ($scope, $http) {
  //TODO: export ingredients on single page to Notes
  //TODO: difficulty
})
.controller('NotesController', function ($scope, $http) {
    // TODO: repurpose cart controller with localstorage
})
  