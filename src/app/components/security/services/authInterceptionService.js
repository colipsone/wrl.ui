(function () {
  "use strict";

  angular
    .module("wrlUi.security")
    .factory("authInterceptionService", authInterceptionService);

  /** @ngInject */
  function authInterceptionService($q, $location, toastr) {
    var service = {
      responseError: responseError
    };

    return service;

    function responseError(rejection) {
      if (rejection.status === 401 && rejection.data.error.code == 'AUTHORIZATION_REQUIRED') {
        toastr.warning('Вы не авторизованы для выполнения этой операции и будете направлены на страницу логина!', {
          timeOut: 3000,
          progressBar: true,
          onHidden: function () {
            $location.path("/login");
          }
        });
      }
      return $q.reject(rejection);
    }
  }
})();
