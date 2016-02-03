(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .factory("apartmentsService", apartmentsService);

    /** @ngInject */
    function apartmentsService($resource, settings, $q) {
        var apartmentApiUrl = settings.baseApiUrl + "apartments";
        var serviceFactory = $resource(apartmentApiUrl, {}, {
        });

        return {
            getApartments: getApartments
        };

        function getApartments() {
            return serviceFactory.query().$promise;
        }
    }
})();
