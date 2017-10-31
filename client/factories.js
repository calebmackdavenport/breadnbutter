angular.module('BreadNButter.factories', [])
.factory('search', ['$resource', function($resource) {
    return $resource('/api/products/:id', { id: '@id' });
}])