(function () {
  'use strict';

  angular
    .module('wrlUi')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).
      state("login", {
        url: "/login",
        templateUrl: "app/security/templates/login.html",
        controller: "loginController",
        controllerAs: "vm"
      }).
      state("signup", {
        url: "/signup",
        templateUrl: "app/security/templates/signup.html",
        controller: "signupController",
        controllerAs: "vm"
      }).
      state("apartments", {
        url: "/apartments",
        templateUrl: "app/apartments/templates/apartmentsList.html",
        controller: "apartmentsController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise('/');
  }

})();
