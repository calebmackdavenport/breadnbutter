angular.module('BreadNButter', 
['ngRoute', 
'ngResource', 
'BreadNButter.controllers', 
'BreadNButter.factories',
'BreadNButter.services',
'BreadNButter.directives'
])

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
    .when('/userrecipehome', {
        templateUrl: "./views/userrecipehome.html",
        controller: "YourRecipeHomeController"  //Login Controller?
    })
    .when('/addrecipe', {
        templateUrl: "./views/addrecipe.html",
        controller: "AddRecipeController"
    })
    .when('/alluserrecipes', {
        templateUrl: "./views/alluserrecipes.html",
        controller: "AllUserRecipesController" 
    })
    .when('/singleuserrecipe', {
        templateUrl: "./views/singleuserrecipe.html",
        controller: "UserRecipeController" 
    })
    .when('/recipe/:id', {
        templateUrl: 'views/single.html'
    }
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/aboutus', {
        templateUrl: "./views/aboutus.html",
        controller: "AboutUsController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);