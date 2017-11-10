angular.module('BreadNButter.factories', [])
//controller for searching by ingredients from search bar
 //currently returns array of 30 recipes
 .factory('ContactForm', ['$resource', function($resource) {
    return $resource('/api/contactforms/:id', { id: '@id' });
 }])
 
.factory('Ingredients', ['$resource', function($resource) {
    return $resource('/api/ingredients/:id', { id: '@id' });
}])

//controller for searching by recipe id (single recipe factory)
.factory('RecipeIngredients', ['$resource', function($resource) {
    return $resource('/api/recipes/:id', { id: '@id' });
}])

//controllers for individual pieces of Recipe
.factory('RecipeTitle', ['$resource', function($resource) {
    return $resource('/api/recipes/title/:id', { id: '@id' });
}])
.factory('RecipeSource', ['$resource', function($resource) {
    return $resource('/api/recipes/source_url/:id', { id: '@id' });
}])
.factory('RecipeImage', ['$resource', function($resource) {
    return $resource('/api/recipes/image_url/:id', { id: '@id' });
}])
.factory('RecipeID', ['$resource', function($resource) {
    return $resource('/api/recipes/recipe_id/:id', { id: '@id' });
}])

//controllers for our user database
.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id', { id: '@id' });
}])
.factory('userRecipe', ['$resource', function($resource) {
    return $resource('/api/userrecipes/:id', { id: '@id' });
}])
.factory('searchFactory', ['$resource', function($resource) {
    return $resource('/api/ingredients/page/:id', { id: '@id' });
}]);