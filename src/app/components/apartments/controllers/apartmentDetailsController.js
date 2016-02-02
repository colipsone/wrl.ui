(function() {
    var apartmentDetailsController = function() {
        var vm = this;

        vm.apartment = {};
    };

    apartmentDetailsController.$inject = ["wrl.common"];

    var module = angular("wrl.apartments").controller(apartmentDetailsController);
})();