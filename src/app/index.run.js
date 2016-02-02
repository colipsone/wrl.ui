(function() {
  'use strict';

  angular
    .module('wrlUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
