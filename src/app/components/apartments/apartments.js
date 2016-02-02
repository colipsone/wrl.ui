(function() {
    "use strict";

    angular.module("wrl.apartments", ["ui.grid", "ui.grid.resizeColumns", "snap"])
        .config(function(snapRemoteProvider) {
            snapRemoteProvider.globalOptions = {
                disable: "right"
            }
        });
})();