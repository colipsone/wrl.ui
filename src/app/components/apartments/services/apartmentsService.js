(function () {
    "use strict";

    angular
        .module("wrl.apartments")
        .factory("apartmentsService", apartmentsService);

    apartmentsService.$inject = ["$resource", "settings"];

    function apartmentsService($resource, settings) {
        var apartmentApiUrl = settings.baseApiUrl + "api/apartment";
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