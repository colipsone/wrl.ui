(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .factory("apartmentsService", apartmentsService);

    /** @ngInject */
    function apartmentsService(Apartment) {
        return {
            getApartments: getApartments,
            createApartment: createApartment
        };

        function getApartments() {
            return Apartment.query().$promise;
        }

        function createApartment(apartment) {
            return Apartment.save(apartment).$promise;
        }
    }
})();
