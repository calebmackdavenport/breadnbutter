angular.module('BreadNButter.controllers', [])
.controller('WelcomeController', ['$scope', '$location', '$timeout', '$anchorScroll', 'Smooth', function ($scope, $location, $timeout, $anchorScroll, Smooth) {
  //TODO: search bar functionality
  //TODO: login/UserService control

  $scope.search = function() {
    $timeout(function () {
    $location.path('/search/' + $scope.searchbox1); // + ", " + $scope.searchbox2
    $location.hash('bottom');
    Smooth.scrollTo('bottom'); }, 600);

    //instantiate variable to hold value even if user navigates away from page
    let searchVar = $scope.searchbox1;
  }

  $scope.searchmore = function() {
    // $location.path('localhost:3000/search/' + searchVar + "&page=2");
    $location.path("&page=2");
  }
}])
.controller('SearchResultsController', ['$scope', '$http', '$location', 'Recipes', 'Ingredients', '$routeParams', function($scope, $http, $location, Recipes, Ingredients, $routeParams) {
  $scope.recipe = Ingredients.query({ id: $routeParams.id }, {id: "array"});

}])
.controller('SinglePageController', function ($scope, $http) {
  //TODO: export ingredients on single page to Notes
  //TODO: difficulty
})
.controller('RecipeController', function ($scope, $http) {

  })
  .controller('NotesController', function ($scope, $http) {
    // TODO: repurpose cart controller with localstorage
  })
  