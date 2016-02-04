(function () {
  "use strict";

  angular
    .module("wrlUi.security")
    .factory("authService", authService);

  /** @ngInject */
  function authService(Agent, $rootScope) {

    var authentication = {};
    setAuthenticationData();

    return {
      authentication: authentication,
      login: login,
      logOut: logOut,
      signUp: signUp
    };

    function logOut() {
      return Agent
        .logout()
        .$promise.then(function () {
          setAuthenticationData();
        });
    };

    function signUp(email, password) {
      return Agent.create({email: email, password: password}).$promise;
    };

    function login(email, password) {
      return Agent
        .login({email: email, password: password})
        .$promise.then(function (accessToken) {
          setAuthenticationData(accessToken);
        });
    };

    function setAuthenticationData(accessToken) {
      authentication.isAuthenticated = !!accessToken;
      authentication.user = !!accessToken ? accessToken.user : {};
      authentication.tokenId = !!accessToken ? accessToken.id : '';
    }
  }
})();
