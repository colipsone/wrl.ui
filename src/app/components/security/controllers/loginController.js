(function () {
    "use strict";

    /** @ngInject */
    function LoginController(authService, $state, $rootScope) {
        var vm = this;

        vm.message = "";

        vm.loginData = {
            email: "",
            password: ""
        };

        vm.login = function () {
            authService.login(vm.loginData.email, vm.loginData.password).then(function () {
                $rootScope.$emit('Event::UserLoggedIn');
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
})();
