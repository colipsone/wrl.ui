(function () {
  "use strict";

  angular
    .module("wrlUi.apartments")
    .factory("apartmentsService", apartmentsService);

  /** @ngInject */
  function apartmentsService(Apartment) {
    return {
      getApartments: getApartments,
      createApartment: createApartment,
      findApartments: findApartments
    };

    function getApartments() {
      return Apartment.query().$promise;
    }

    function createApartment(apartment) {
      return Apartment.save(apartment).$promise;
    }

    function findApartments(searchBy) {
      return Apartment.find({
        filter: {where: {streetName: searchBy.streetName}}
      }).$promise;
    }
  }
})();
