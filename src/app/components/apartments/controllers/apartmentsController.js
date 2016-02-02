(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .controller("ApartmentsController", ApartmentsController);

    /** @ngInject */
    function ApartmentsController(apartmentsService, settings, $uibModal) {
        var vm = this;

        vm.lang = settings.langLocale;

        vm.gridOptions = {
            columnDefs: [
                {
                    name: "Номер",
                    field: "number"
                },
                {
                    name: "Название улицы",
                    field: "streetName"
                },
                {
                    name: "№ дома",
                    field: "houseNumber"
                }
            ]
        }

        apartmentsService.getApartments().then(function (apartments) {
            vm.gridOptions.data = apartments;
        });

        // #region Open Edit Dialog

        vm.editApartment = function(apartment) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "app/components/apartments/templates/apartmentDetails.html",
                controller: "ApartmentDetailsController",
                resolve: {
                    apartment: apartment
                }
            });

            modalInstance.result.then(function() {

            }, function() {

            });
        }

        // #endregion
    }
})();
