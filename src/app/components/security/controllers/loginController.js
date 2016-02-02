(function () {
    "use strict";

    function loginController(authService, $timeout, $state) {
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
        .module("wrl.security")
        .controller("loginController", loginController);

    loginController.$inject = ["authService", "$timeout", "$state"];
})();
