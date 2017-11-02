angular.module('BreadNButter', 
['ngRoute', 
'ngResource', 
'BreadNButter.controllers', 
'BreadNButter.factories',
'BreadNButter.services'])

.config(['$locationProvider', '$routeProvider', function( $locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/',{
        templateUrl: "views/home.html",
        controller: "WelcomeController"
    })
    .when('/search', {
        templateUrl: "./views/search.html",
        controller: "TestController"
    })
    .when('/search/:id', {
        templateUrl: "./views/searchresults.html",
        controller: "SearchResultsController"
    })
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/yourrecipe', {
        templateUrl: "./views/yourrecipes.html",
        controller: "YourRecipeController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);