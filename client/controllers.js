angular.module('BreadNButter.controllers', [])
.controller('WelcomeController', function ($scope, $http) {
  //TODO: search bar functionality
  //TODO: login/UserService control
})
.controller('SinglePageController', function ($scope, $http) {
  //TODO: export ingredients on single page to Notes
  //TODO: difficulty
})
.controller('RecipeController', function ($scope, $http) {
      $scope.searchForRecipes = function() {
        $scope.recipes = [];
        if ($scope.recipeSearch) {
          $http.get('/api/recipe-search?q=' + encodeURI($scope.recipeSearch)).success(function(data) {
            angular.forEach(data.recipes, function(recipe) {
              $scope.recipes.push({ name: recipe.title, id: recipe.recipe_id, loaded: false });
            });
          });
        }
      };

      $scope.loadIngredients = function(recipe) {
        if (recipe) {
          $http.get('/api/ingredients?recipe=' + recipe.id).success(function(data) {
            recipe.ingredients = data.recipe.ingredients;
            recipe.loaded = true;
          });
        }
      };
  })
  .controller('NotesController', function ($scope, $http) {
    // TODO: repurpose cart controller with localstorage
  })