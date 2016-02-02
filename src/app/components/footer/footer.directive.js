/**
 * Created by colipsone on 2/2/2016.
 */
(function() {
  'use strict';

  angular
    .module('wrlUi')
    .directive('wrlFooter', wrlFooter);

  function wrlFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;
    }
  }

})();
