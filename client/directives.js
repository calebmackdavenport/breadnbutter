angular.module('BreadNButter.directives', [])
.directive('scrollBottom', function ($document) {
    //This function will fire an event when the container/document is scrolled to the bottom of the page
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var doc = angular.element($document)[0].body;

            $document.bind("scroll", function () {

                //console.log('in scroll');
                //console.log("scrollTop + offsetHeight:" + (doc.scrollTop + doc.offsetHeight));
                //console.log("scrollHeight: " + doc.scrollHeight);

                if (doc.scrollTop + doc.offsetHeight >= doc.scrollHeight) {
                    //run the event that was passed through
                    scope.$apply(attrs.onScrollToBottom);
                }
            });
        }
    };
});
angular.module('BreadNButter.directives', [])
.directive('mainNav', [function() {
	return {
		templateUrl: 'directives/navbar.html',
		restrict: 'E', // can only appear as an element.. can't be an attribute.. custom html element
		scope: {
			activePage: '=' // shorthand for 
		}
	};
}])