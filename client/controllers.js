angular.module('BreadNButter.controllers', [])
.controller('WelcomeController', function ($scope, $http) {
  //TODO: search bar functionality
  //TODO: login/UserService control
})
.controller('SearchResultsController', ['$scope', '$http', '$location', 'Recipes', 'Ingredients', '$routeParams', function($scope, $http, $location, search, Recipes, Ingredients, $routeParams) {
  $scope.searchresults = Ingredients.get({ id: $routeParams.id });
  // $scope.searchresults2 = Ingredients.query({ id: $routeParams.id });
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
  