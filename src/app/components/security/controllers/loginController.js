(function () {
    "use strict";

    /** @ngInject */
    function LoginController(authService, $timeout, $state) {
        var vm = this;

        vm.message = "";

        vm.loginData = {
            userName: "",
            password: ""
        };

        vm.login = function () {

            authService.login(vm.loginData).then(function (response) {
                $state.go("apartments");
            },
             function (err) {
                 vm.message = err.error_description;
             });
        };
    }

    angular
        .module("wrlUi.security")
        .controller("LoginController", LoginController);

    //LoginController.$inject = ["authService", "$timeout", "$state"];
})();
