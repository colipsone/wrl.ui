(function () {
    "use strict";

    /** @ngInject */
    function SignupController(authService, $timeout, $state) {
        var vm = this;

        vm.savedSuccessfully = false;
        vm.message = "";

        vm.registration = {
            email: "",
            password: "",
            confirmPassword: ""
        };

        vm.signUp = function () {
            authService.signUp(vm.registration.email, vm.registration.password).then(function (response) {
                vm.savedSuccessfully = true;
                vm.message = "Пользователь успешно зарегистрирован, вы будете направлены на страницу логина через 2 секунды.";
                startTimer();
            },
            function (error) {
            });
        };

        function startTimer() {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $state.go("login");
            }, 2000);
        }
    }

    angular
        .module("wrlUi.security")
        .controller("SignupController", SignupController);
})();
