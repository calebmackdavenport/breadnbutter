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
    .when('/recipeoftheday', {
        templateUrl: 'views/hotchicken.html',
        controller: 'SinglePageController'
    })
    .when('/recipes', {
        templateUrl: 'views/allrecipes.html'
    })
    .when('/userrecipehome', {
        templateUrl: "./views/userrecipehome.html",
        controller: "LoginController"  //Login Controller?
    })
    .when('/alluserrecipes', {
        templateUrl: "./views/alluserrecipes.html",
        controller: "AllUserRecipesController" 
    })
    .when('/singleuserrecipe/:id', {
        templateUrl: "./views/singleuserrecipe.html",
        controller: "UserRecipeController" 
    })
    .when('/recipe/:id', {
        templateUrl: '/views/single.html',
        controller: "SinglePageController"
    })
    .when('/recipes/302', {
        templateUrl: '/views/burger.html'
    })
    .when('/grocerylist', {
        templateUrl: "views/list.html",
        controller: "ListController"
    })
    .when('/yourrecipes', {
        templateUrl: "./views/yourrecipes.html",
        controller: "YourRecipesController",
        // requiresLogin: true
    })
    .when('/addrecipe', {
        templateUrl: "./views/addrecipe.html",
        controller: "AddRecipeController",
        requiresLogin: true
    })
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/aboutus', {
        templateUrl: "./views/aboutus.html",
        controller: " "
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
}])
.run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, previousRoute) {
        if(nextRoute.$$route && nextRoute.$$route.requiresLogin && !UserService.isLoggedIn()) {
            event.preventDefault();
            UserService.loginRedirect();
        }
    })
}])