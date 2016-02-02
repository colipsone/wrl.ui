(function() {
    var ApartmentDetailsController = function() {
        var vm = this;

        vm.apartment = {};
    };

    //ApartmentDetailsController.$inject = ["wrlUi.common"];

    angular.module("wrlUi.apartments").controller(ApartmentDetailsController);
})();
