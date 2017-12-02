(function () {
    'use strict';

    angular
        .module('PhoneMarket')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PhonesFactory'];

    function HomeController($scope, PhonesFactory) {
        $scope.phones = [];
        $scope.favs = [];

        activate();

        ////////////////

        function activate() {
            $scope.phones = PhonesFactory.getAll();
        }
        
    }
})();
