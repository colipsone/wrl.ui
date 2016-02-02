(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .factory("apartmentsService", apartmentsService);

    /** @ngInject */
    function apartmentsService($resource, settings) {
        var apartmentApiUrl = settings.baseApiUrl + "api/apartment";
        var serviceFactory = $resource(apartmentApiUrl, {}, {
        });

        return {
            getApartments: getApartments
        };

        function getApartments() {
            //return serviceFactory.query().$promise;
            return [{

            }];
        }
    }
})();
