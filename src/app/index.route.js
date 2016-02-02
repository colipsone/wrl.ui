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
        templateUrl: "app/components/security/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      }).
      state("signup", {
        url: "/signup",
        templateUrl: "app/components/security/templates/signup.html",
        controller: "SignupController",
        controllerAs: "vm"
      }).
      state("apartments", {
        url: "/apartments",
        templateUrl: "app/components/apartments/templates/apartmentsList.html",
        controller: "ApartmentsController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise('/');
  }

})();
