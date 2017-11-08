angular.module('BreadNButter.controllers', [])
.controller('MainController', ['$scope', '$location', '$timeout', '$anchorScroll', 'Smooth', function ($scope, $location, $timeout, $anchorScroll, Smooth) {

}])
.controller('WelcomeController', ['$scope', '$location', '$timeout', '$anchorScroll', 'Smooth', function ($scope, $location, $timeout, $anchorScroll, Smooth) {
  //TODO: search bar functionality
  //TODO: login/UserService control

  $scope.search = function() {
    $location.path('/search/' + $scope.searchbox1 + "&page=1");
    $location.hash('bottom');

    // if($scope.searchbox1.length < 11) {
    // $timeout(function() {
    //   Smooth.scrollTo('bottom'); }, 500);
    //   }
    // else if ($scope.searchbox1.length > 11 && $scope.searchbox1.length < 19) {
    //   $timeout(function() {
    //     Smooth.scrollTo('bottom'); }, 1000);
    //   }
    // else {
    //   $timeout(function() {
    //     Smooth.scrollTo('bottom'); }, 1500);
    //   }
    
  }
  

  if (localStorage.items === undefined)
    localStorage.items = angular.toJson([]);
  $scope.list = angular.fromJson(localStorage.items);
  $scope.removeItem = function (i) {
    let index = $scope.list.indexOf(i)
    if (index > -1) {
      $scope.list.splice(index, 1);
    }
    localStorage.items = angular.toJson($scope.list);
    $rootScope.$broadcast("listChanged");
  }

  $scope.goToSingle = function() {
    $location.path('/recipe/:id');
  }
}])
.controller('SearchResultsController', ['$scope', '$timeout', '$location', 'Ingredients', '$routeParams', 'Smooth', function($scope, $timeout, $location, Ingredients, $routeParams, Smooth) {
  $scope.recipe = Ingredients.query({ id: $routeParams.id }, function() {
    Smooth.scrollTo('bottom');
  });

  // $location.hash('bottom');
  // $timeout(function() {
  //   Smooth.scrollTo('bottom'); }, 500);
    //TODO fix this
  $scope.searchMore = function() {
    //only works if &page= exists at the end of window.location.pathname, which it always should
      let path = window.location.pathname;
      let pageNum = path[path.length - 1];
      let newPageNum = parseInt(pageNum) + 1;
      path = path.slice(0, -1);
      path = path + (newPageNum);
      // console.log(path);
      $location.path(path);
      $location.hash('bottom');
      $timeout(function() {
        Smooth.scrollTo('bottom'); }, 500);
  }

  $scope.singleView = function(e) {
    $location.path('/recipe/' + e.target.parentNode.id);
    // $timeout(function() {
    //   Smooth.scrollTo('bottom');
    // }, 500);
  }
    
}])
.controller('SinglePageController', ['$rootScope', '$timeout', '$scope', '$location', '$routeParams','RecipeIngredients', 
function($rootScope, $timeout, $scope, $location, $routeParams, RecipeIngredients) {
  //TODO: export ingredients on single page to Notes
  $scope.r = RecipeIngredients.get({ id: $routeParams.id }, {id: "array"});
  console.log($scope.r);

  $timeout(function() {
    ingredients = [];
    for(i=0; i<20; i++) {
      ingredients.push($('#i'+i).text());
    }
    //array below presents the full string of ingredients as a set of strings without the blank angular input
    iList = ingredients.filter(String); 

    console.log(iList);

    $scope.addIngredients = function () {
      alert('Ingredients added to the list!');
      let cachedItems = JSON.parse(localStorage.items);
      for(i=0; i<iList.length; i++) {
        cachedItems.push(iList[i]);
      }
      localStorage.items = JSON.stringify(cachedItems);
      $rootScope.$broadcast("listChanged");
      console.log(cachedItems);
      console.log(localStorage.items);
  }
  }, 1500);
 

  // $location.hash('bottom');
  // Smooth.scrollTo('bottom');
}])
.controller('ListController', ['$scope','$rootScope', '$routeParams', '$http', '$location',
function ($scope, $rootScope, $routeParams, $http, $location) {

  if (localStorage.items === undefined)
  localStorage.items = angular.toJson([]);
  $scope.list = angular.fromJson(localStorage.items);

    $scope.removeItem = function (i) {
      let index = $scope.list.indexOf(i)
      if (index > -1) {
       $scope.list.splice(index, 1);
        }
      localStorage.items = angular.toJson($scope.list);
      $rootScope.$broadcast("listChanged");
      } //end remove item

    $scope.exportText = function (args) {
      let all = localStorage.items;
      let exportList = all.split(/"(.*?)"/);
      
            for (i=0; i<exportList.length; i++) {
              if (exportList[i].length < 2) {
                exportList.splice(i,1);
              }
            }
            exportList.unshift("Your grocery list provided by Bread & Butter");
      var textFile = null,
      makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});
    
        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }
    
        textFile = window.URL.createObjectURL(data);
    
        return textFile;
      };
    
    
      var create = document.getElementById('create'),
        textbox = document.getElementById('textbox');
    
      create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(textbox.value);
        link.style.display = 'block';
      }, false);
    }

    $scope.export = function (args) {
      let all = localStorage.items;
      let exportList = all.split(/"(.*?)"/);

      for (i=0; i<exportList.length; i++) {
        if (exportList[i].length < 2) {
          exportList.splice(i,1);
        }
      }
      exportList.unshift("Your grocery list provided by Bread & Butter                                   ");
      console.log(exportList);

      var fs = require('fs');
      
      
    
      var data, filename, link;
      var csv = convertArrayOfObjectsToCSV({
          data: exportList
      });
      if (csv == null) return;
  
      filename = 'B&Bgrocerylist.csv'; //args.filename || 
  
      if (!csv.match(/^data:text\/csv/i)) {
          csv = 'data:text/csv;charset=utf-8,' + csv;
      }
      data = encodeURI(csv);
  
      link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    }


    //Testing -> CSV
    function convertArrayOfObjectsToCSV(args) {  
      var result, ctr, keys, columnDelimiter, lineDelimiter, data;

      data = args.data || null;
      if (data == null || !data.length) {
          return null;
      }

      columnDelimiter = args.columnDelimiter || '';
      lineDelimiter = args.lineDelimiter || '\n';

      keys = Object.keys(data[0]);

      result = '';
      result += keys.join(columnDelimiter);
      result += lineDelimiter;

      data.forEach(function(item) {
          ctr = 0;
          keys.forEach(function(key) {
              //TODO: some if statement to limit undefined additions when arraylength is shorter than longest array 
              //this code don't make no sense
              if (ctr > 0) result += columnDelimiter;

              if (item[key]){
                result += item[key];
              }
              ctr++;
          });
          result += lineDelimiter;
      });

      return result;
  }

}])
.controller('ContactPageController', ['$scope', 'ContactForm', function($scope, ContactForm){
  $scope.send = function(){
    let contact = new ContactForm({
      from: $scope.email,
      subject: $scope.subject,
      message: $scope.message,
      name: $scope.name
    });
 
    contact.$save(function(){
      alert ("Thank you for your message! Bon appetit!")
    }, function(err){
      console.log(err);
    });
  }
 }])
 .controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
   UserService.me().then((success)=>{
     redirect();
   });

   function redirect() {
     let dest = $location.search().dest;
     if(!dest){
       dest = '/';
     }
     $location.replace().path(dest).search('dest', null);
   }

   $scope.login = function(){
     UserService.login($scope.email, $scope.password)
     .then(()=>{
       redirect();
     },(err)=>{
       console.log(err);
     });
   }
 }])
  