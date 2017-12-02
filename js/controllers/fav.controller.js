(function() {
    'use strict';

    angular
        .module('PhoneMarket')
        .controller('FavController', FavController);

    FavController.$inject = ['$scope', 'PhonesFactory'];

    /* @ngInject */
    function FavController($scope, PhonesFactory){
        $scope.title = 'Lista Favoritos';
        $scope.favs = [];
        

        activate();

        ////////////////

        function activate() {
            $scope.favs = PhonesFactory.getDesired();
        }
    }
})();