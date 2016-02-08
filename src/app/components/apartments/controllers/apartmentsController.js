(function () {
    "use strict";

    angular
        .module("wrlUi.apartments")
        .controller("ApartmentsController", ApartmentsController);

    /** @ngInject */
    function ApartmentsController(apartmentsService, settings, $uibModal) {
        var vm = this;

        vm.lang = settings.langLocale;

        vm.searchBy = {
          streetName: ''
        };

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
                controllerAs: "vm",
                resolve: {
                    apartment: apartment
                }
            });

            modalInstance.result.then(function(newApartment) {
              vm.gridOptions.data.push(newApartment);
            }, function() {

            });
        }

        vm.findApartments = function(){
          apartmentsService.findApartments(vm.searchBy).then(function (apartments) {
            vm.gridOptions.data = apartments;
          });
        }

        // #endregion
    }
})();
