;
(function() {
    'use strict';

    angular
        .module('core')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl(IdeasAPI, $storage, $http, $location) {
        var vm = this;
        vm.showSignUp = false;
        vm.name = "";
        vm.email = "";
        vm.password = "";


        vm.signUpUser = function() {
            IdeasAPI.signUp(vm.name, vm.email, vm.password).then(function(response) {
                $storage.set("token", response.data.jwt);
                $storage.set("refresh_token", response.data.refresh_token);
                $location.path("ideas");
            }).catch(function(err) {
                vm.showErrorMsg = true;
                vm.errorMsg = err.data.reason;
            });
        };

        vm.loginUser = function() {
            IdeasAPI.login(vm.email, vm.password).then(function(response) {
                $storage.set("token", response.data.jwt);
                $storage.set("refresh_token", response.data.refresh_token);
                $location.path("ideas");
            }).catch(function(err) {
                vm.showErrorMsg = true;
                vm.errorMsg = err.data.reason;
            });
        };

        function init() {
            if ($storage.get("token")) {
                IdeasAPI.refreshToken().then(function(response) {
                    $storage.set("token", response.data.jwt);
                    $location.path("ideas");
                })
            }
        }
        init();
    }
}).call(this);