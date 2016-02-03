(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .factory("apartmentsService", apartmentsService);

    /** @ngInject */
    function apartmentsService($resource, settings) {
        var apartmentApiUrl = settings.baseApiUrl + "apartments";
        var serviceFactory = $resource(apartmentApiUrl, {}, {
        });

        return {
            getApartments: getApartments,
            createApartment: createApartment
        };

        function getApartments() {
            return serviceFactory.query().$promise;
        }

        function createApartment(apartment) {
            return serviceFactory.save(apartment).$promise;
        }
    }
})();
