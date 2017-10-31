angular.module('BreadNButter.controllers', [])
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

    });