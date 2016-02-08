(function () {
  "use strict";

  /** @ngInject */
  function LoginController(authService, $state, $rootScope, toastr) {
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
          toastr.error('<strong>Ошибка авторизации!</strong> Email пользователя и/или пароль не верны. <br />' +
            'Введите корректные данные.', {
          });
        });
    };
  }

  angular
    .module("wrlUi.security")
    .controller("LoginController", LoginController);
})();
