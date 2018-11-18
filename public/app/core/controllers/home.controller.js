;
(function() {
    'use strict';

    angular
        .module('core')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {

        var vm = this;
        vm.firstName = "Apurv";
        vm.showSignUp = false;
        vm.showSignUpForm = function(){
            vm.showSignUp = true;
        };
    

    }
}).call(this);