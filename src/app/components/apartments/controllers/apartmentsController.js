(function () {
    "use strict";

    angular
        .module("wrl.apartments")
        .controller("apartmentsController", apartmentsController);

    apartmentsController.$inject = ["apartmentsService", "settings", "$uibModal"];

    function apartmentsController(apartmentsService, settings, $uibModal) {
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
                templateUrl: "app/apartments/templates/apartmentDetails.html",
                controller: "apartmentDetailsController",
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
