angular.module('BreadNButter.factories', [])
.factory('Recipes', ['$resource', function($resource) {
    return $resource('/api/recipes/:id', { id: '@id' });
}])
.factory('Ingredients', ['$resource', function($resource) {
    return $resource('/api/ingredients/:id', { id: '@id' });
}])