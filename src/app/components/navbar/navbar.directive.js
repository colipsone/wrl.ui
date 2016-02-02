(function() {
  'use strict';

  angular
    .module('wrlUi')
    .directive('wrlNavbar', wrlNavbar);

  function wrlNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(authService) {
      var vm = this;
      vm.isAuthenticated = authService.authentication.isAuthenticated;
      vm.userName = authService.authentication.userName
    }
  }

})();
