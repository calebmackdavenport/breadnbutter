angular.module('BreadNButter.services', [])
.service('Smooth', function () {

            this.scrollTo = function (eID) {

                var startY = currentYPosition();
                var stopY = elmYPosition(eID);
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY);
                    return;
                }
                var speed = Math.round(distance / 100);
                if (speed >= 5) speed = 52;
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for (var i = startY; i < stopY; i += step) {
                        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                        leapY += step;
                        if (leapY > stopY) leapY = stopY;
                        timer++;
                    }
                    return;
                }
                for (var i = startY; i > stopY; i -= step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY -= step;
                    if (leapY < stopY) leapY = stopY;
                    timer++;
                }

                function currentYPosition() {
                    if (self.pageYOffset) return self.pageYOffset;
                    if (document.documentElement && document.documentElement.scrollTop)
                        return document.documentElement.scrollTop;
                    if (document.body.scrollTop) return document.body.scrollTop;
                    return 0;
                }

                function elmYPosition(eID) {
                    var elm = document.getElementById(eID);
                    var y = elm.offsetTop - 68;
                    var node = elm;
                    while (node.offsetParent && node.offsetParent != document.body) {
                        node = node.offsetParent;
                        y += node.offsetTop;
                    }
                    return y;
                }

            };
})
.service('UserService', ['$http', '$location', function($http, $location) {
    let currentUser;

    this.isLoggedIn = function(){
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    }

    this.loginRedirect = function(){
        let current = $location.path();
        $location.path('/userrecipehome').search('dest', current);
    }

    this.login = function(email, password) {
        return $http({
            method: 'POST',
            url: '/api/users/login',
            data: { email: email, password: password }
        }).then((res)=>{
            currentUser = res.data;
            return currentUser;
        })
    }

    this.logout = function(){
        return $http({
            method:'GET',
            url:'/api/users/logout'
        }).then(()=>{
            return currentUser = undefined;
        })
    }

    this.me = function(){
        if(currentUser) {
            return Promise.resolve(currentUser);
        } else {
            return $http({
                url:'/api/users/me'
            }).then((response)=>{
                currentUser = response.data;
                return currentUser;
            });
        }
    }
}])