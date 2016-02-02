(function() {
    "use strict";

    angular.module("wrlUi.apartments", ["ui.grid", "ui.grid.resizeColumns", "snap"])
        .config(function(snapRemoteProvider) {
            snapRemoteProvider.globalOptions = {
                disable: "right"
            }
        });
})();
