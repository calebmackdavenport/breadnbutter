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
    .when('/search/:id', {
        templateUrl: "./views/searchresults.html",
        controller: "SearchResultsController"
    })  
    .when('/recipes', {
        templateUrl: 'views/allrecipes.html'
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
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/aboutus', {
        templateUrl: "./views/aboutus.html",
        controller: "AboutUsController"
    })
    .when('/recipe/:id', {
        templateUrl: 'views/single.html',
        controller: "SinglePageController"
    })
    .when('/grocerylist', {
        templateUrl: "views/list.html",
        controller: "ListController"
    })
    .when('/userrecipehome', {
        templateUrl: "./views/userrecipehome.html",
        controller: "YourRecipeHomeController"  //Login Controller?
    })
    .when('/addrecipe', {
        templateUrl: "./views/addrecipe.html",
        controller: "AddRecipeController"
    })
    .when('/singleuserrecipe', {
        templateUrl: "./views/singleuserrecipe.html",
        controller: "UserRecipeController" 
    })
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/aboutus', {
        templateUrl: "./views/aboutus.html",
        controller: "AboutUsController"
    })
    .when('/toprecipes/:id', {
        templateUrl: "./views/toprecipes.html",
        controller: "TopRecipesController"
    })
    .when('/login', {
        templateUrl: "views/login.html",
    })
    .otherwise({
        redirectTo: '/'
    });
}]);