(function () {
  'use strict';

  angular
    .module('wrlUi', ['ui.router', 'ui.bootstrap', 'wrlUi.security', 'wrlUi.apartments', 'toastr',
      'lbServices', 'LocalStorageModule']);
})();
