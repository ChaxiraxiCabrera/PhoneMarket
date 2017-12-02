(function () {
    'use strict';
    angular.module('PhoneMarket', ['ngRoute']).config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider
            .when("/", {
                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
            .when("/home", {
                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
            .when("/deseados", {
                controller: 'FavController',
                templateUrl: '/views/fav.html'
            })
            .when("/phone/:id", {
                controller: 'SingleController',
                templateUrl: '/views/phone.html'
            })
    }

})();
