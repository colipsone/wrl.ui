(function() {

  /** @ngInject */
  var ApartmentDetailsController = function(apartmentsService, $uibModalInstance) {
        var vm = this;

        vm.save = function(){
          apartmentsService.createApartment(vm.apartment).then(function(response){
            $uibModalInstance.close(response);
          }, function(error){

          });
        }

        vm.cancel = function(){
          $uibModalInstance.dismiss('cancel');
        }

        vm.newApartment = function(){
          return {
            number: "testNumber"
          }
        }

        vm.apartment = vm.newApartment();
    };

    angular.module("wrlUi.apartments").controller("ApartmentDetailsController", ApartmentDetailsController);
})();
