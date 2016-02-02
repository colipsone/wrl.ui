/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('webrealtylife')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .service("settings", function() {
      return {
        baseApiUrl: "http://localhost:4897/",
        langLocale: "ru"
      };
  });

})();
