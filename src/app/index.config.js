(function () {
  'use strict';

  angular
    .module('wrlUi')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, LoopBackResourceProvider, localStorageServiceProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Set base api Url
    LoopBackResourceProvider.setUrlBase('http://localhost:3001/api');

    // Config local storage provider
    localStorageServiceProvider
      .setPrefix('wrl');

    // Set interceptor for $httpProvider
    $httpProvider.interceptors.push('authInterceptionService');
  }

})();
