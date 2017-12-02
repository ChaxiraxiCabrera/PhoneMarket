(function() {
    'use strict';

    angular
        .module('PhoneMarket')
        .controller('SingleController', SingleController);

    SingleController.$inject = ['$scope', '$routeParams', 'PhonesFactory'];

    /* @ngInject */
    function SingleController($scope, $routeParams, PhonesFactory){
               
        $scope.phone = {};
        $scope.setDesired = setDesired;

        activate();

        ////////////////

        function activate() {
            var phone = $routeParams.id;
            $scope.phone = PhonesFactory.get(phone);
        }
        
        function setDesired(phone){
            PhonesFactory.setDesired(phone);
        }
    }
})();