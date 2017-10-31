angular.module('BreadNButter.factories', [])
.factory('search', ['$resource', function($resource) {
    return $resource('/api/search/:id', { id: '@id' });
}])