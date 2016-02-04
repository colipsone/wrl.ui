(function () {
  'use strict';

  angular
    .module('wrlUi')
    .directive('wrlNavbar', wrlNavbar);

  function wrlNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: false,
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(authService, $rootScope, $state) {

      var vm = this;

      vm.logOut = function () {
        authService.logOut().then(function () {
          vm.setAuthData();
          $state.go("home");
        });
      }

      vm.setAuthData = function () {
        vm.isAuthenticated = authService.authentication.isAuthenticated;
        vm.userEmail = authService.authentication.user.email
      }

      vm.setAuthData();

      // Event subscription is necessary because navbar directive is located out of main
      // view and changes in authServise are out of $digest cycle and don't influence to current scope
      $rootScope.$on('Event::UserLoggedIn', function (event) {
        event.preventDefault();
        event.stopPropagation();
        vm.setAuthData();
      })
    }
  }

})();
