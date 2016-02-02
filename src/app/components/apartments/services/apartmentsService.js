(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .factory("apartmentsService", apartmentsService);

    /** @ngInject */
    function apartmentsService($resource, settings, $q) {
        var apartmentApiUrl = settings.baseApiUrl + "api/apartment";
        var serviceFactory = $resource(apartmentApiUrl, {}, {
        });

        return {
            getApartments: getApartments
        };

        function getApartments() {
            //return serviceFactory.query().$promise;
            var deferred = $q.defer();
            deferred.resolve([{
              number: "15",
              streetName: "Петропавловская",
              houseNumber: "56"
            }]);
            return deferred.promise;
        }
    }
})();
