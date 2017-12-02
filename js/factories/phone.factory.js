(function () {
    'use strict';
    angular
        .module('PhoneMarket')
        .factory('PhonesFactory', PhonesFactory);

    PhonesFactory.$inject = [];

    /* @ngInject */
    function PhonesFactory(){
        var exports = {
            getAll: getAll,
            get: get,
            setDesired: setDesired,
            getDesired: getDesired
        };
        

        return exports;

        ////////////////

        function getAll(){
            var phones = generatePhones();
            return phones;
        }
        
        function get(id){
            var phones = generatePhones();
            for (let i = 0; i < phones.length; i++){
                if (phones[i].id == id)
                    return phones[i];
            }
            return {};
        } 
        
        function setDesired(phone){
            console.log(phone.id);
            if ('desired' in localStorage){
                var desired = getDesired();
                if (!checkDesired(phone.id)) {
                    desired.push(phone);
                    console.log(desired);
                    localStorage.setItem('desired', JSON.stringify(desired));
                }
            }else{
                var desired = [];
                desired.push(phone);
                localStorage.setItem('desired', JSON.stringify(desired));
            }
        }
        
        function getDesired(){
            return JSON.parse(localStorage.getItem('desired'));
        }
        
        function checkDesired(id){
            var desired = getDesired();
            for (let i = 0; i < desired.length; i++){
                if (desired[i].id == id)
                    return true;
            }
            return false;
        }
        
        function generatePhones() {
           return [{id: 1, name: 'P9', brand: 'Huawei', photo: '../../img/huawei.jpg', memory: '32GB', screen: '5.2', bluetooth: 'Si', OS: 'Android'},
                {id: 2, name: 'Galaxy S7', brand: 'Samsung', photo: '../../img/samsung.jpg', memory: '32GB', screen: '5.1', bluetooth: 'Si', OS: 'Android'},
                {id: 3, name: 'Iphone 6S', brand: 'Apple', photo: '../../img/iphone.jpg', memory: '32GB', screen: '4.7', bluetooth: 'Si', OS: 'iOS'},
                {id: 4, name: 'G5', brand: 'LG', photo: '../../img/lg.jpg', memory: '32GB', screen: '5.3', bluetooth: 'Si', OS: 'Android'},
                {id: 5, name: 'Xperia L1', brand: 'Sony', photo: '../../img/sony.jpg', memory: '16GB', screen: '5.5', bluetooth: 'Si', OS: 'Android'},
                {id: 6, name: '5', brand: 'Nokia', photo: '../../img/nokia.jpg', memory: '16GB', screen: '5.2', bluetooth: 'Si', OS: 'Android'},
                {id: 7, name: 'MI 6', brand: 'Xiaomi', photo: '../../img/xiaomi.jpg', memory: '64GB', screen: '5.1', bluetooth: 'Si', OS: 'Android'}];
        }
        
    }
})();