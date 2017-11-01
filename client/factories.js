angular.module('BreadNButter.factories', [])
.factory('Recipes', ['$resource', function($resource) {
    return $resource('/api/ingredients/:id', { id: '@id' }, {
        queryByIngredient: {
            method: 'GET',
            url: '/api/recipes/ingredient/:ingredientName',
            
            isArray: true
        }
    });
}])
.factory('Ingredients', ['$resource', function($resource) {
    return $resource('/api/ingredients/:id', { id: '@id' });
}])
// .factory("Ingredients", function ($resource) {
//     return $resource(
//         "/api/ingredients/:id",
//         {   Id: "@Id" },
//         {
//             // "update": {method: "PUT"},
//             // "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}
//         }
//     );
// });