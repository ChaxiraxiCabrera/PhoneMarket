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
        $scope.isDesired = isDesired;

        activate();

        ////////////////

        function activate() {
            var phone = $routeParams.id;
            $scope.phone = PhonesFactory.get(phone);
        }
        
        function setDesired(phone){
            PhonesFactory.setDesired(phone);
        }
        
        function isDesired(id){
            var desired = PhonesFactory.getDesired();
            
            for(let i = 0; i < desired.length; i++){
                if (desired[i].id == id)
                    return true;
            }
            return false;
        }
    }
})();