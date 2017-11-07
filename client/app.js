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
    .when('/userrecipehome', {
        templateUrl: "./views/userrecipehome.html",
        controller: "YourRecipeHomeController"  //Login Controller?
    })
    .when('/list', {
        templateUrl: "./views/list.html",
        controller: "ListController"
    })
    .when('/addrecipe', {
        templateUrl: "./views/addrecipe.html",
        controller: "AddRecipeController"
    })
    .when('/alluserrecipes', {
        templateUrl: "./views/alluserrecipes.html",
        controller: "AllUserRecipesController" 
    })
    .when('/aboutus', {
        templateUrl: "./views/aboutus.html",
        controller: "AboutUsController"
    })
    .when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactPageController"
    })
    .when('/:id', {
        templateUrl: "./views/singleuserrecipe.html",
        controller: "UserRecipeController" 
    })
    .when('/recipe/:id', {
        templateUrl: 'views/single.html',
        // templateUrl: "./views/singleview.html", /* commented out temporarily */
        controller: "SinglePageController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);