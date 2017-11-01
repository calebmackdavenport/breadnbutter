angular.module('BreadNButter.controllers', [])
.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
  //TODO: search bar functionality
  //TODO: login/UserService control
  $scope.search = function() {
    $location.path('/search/' + $scope.searchbox);
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
  