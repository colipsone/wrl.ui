(function() {
  'use strict';

  angular
    .module('webrealtylife')
    .directive('wrlNavbar', wrlNavbar);

  /** @ngInject */
  function wrlNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          isAuthenticated: true,
          userName: 'Nick'
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      //var vm = this;
    }
  }

})();
