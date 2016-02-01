(function() {
  'use strict';

  angular
    .module('webrealtylife')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
