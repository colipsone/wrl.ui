(function () {
    "use strict";

    function signupController(authService, $timeout, $state) {
        var vm = this;

        vm.savedSuccessfully = false;
        vm.message = "";

        vm.registration = {
            userName: "",
            password: "",
            confirmPassword: ""
        };

        vm.signUp = function () {

            authService.saveRegistration(vm.registration).then(function (response) {

                vm.savedSuccessfully = true;
                vm.message = "Пользователь успешно зарегистрирован, вы будете направлены на страницу логина через 2 секунды.";
                startTimer();

            },
            function (response) {
                 var errors = [];
                 for (var key in response.data.modelState) {
                     for (var i = 0; i < response.data.modelState[key].length; i++) {
                         errors.push(response.data.modelState[key][i]);
                     }
                 }
                 vm.message = "Пользователь не зарегистрирован из-за: " + errors.join(" ");
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
        .module("wrl.security")
        .controller("signupController", signupController);

    signupController.$inject = ["authService", "$timeout", "$state"];
})();
