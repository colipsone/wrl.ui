(function () {
    "use strict";

    angular
        .module("wrl.security")
        .factory("authService", authService);

    authService.$inject = ["$resource", "settings", "localStorageService"];

    function authService($resource, settings, localStorageService) {
        var serviceFactory = $resource(settings.baseApiUrl, {}, {
            register: {
                method: "POST",
                url: settings.baseApiUrl + "api/account/register"
            },
            login: {
                method: "POST",
                url: settings.baseApiUrl + "token",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        });

        var authentication = {
            isAuth: false,
            userName: ""
        };

        return {
            authentication: authentication,
            login: login,
            logOut: logOut,
            saveRegistration: saveRegistration,
            fillAuthData: fillAuthData
        };

        //#region Methods: Private

        function logOut() {
            localStorageService.remove("authorizationData");

            authentication.isAuth = false;
            authentication.userName = "";

        };

        function saveRegistration(registration) {

            logOut();

            return serviceFactory.register(registration).$promise.then(function (response) {
                return response;
            });
        };

        function login(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            return serviceFactory.login(data).$promise.then(function (response) {

                localStorageService.set("authorizationData", { token: response.access_token, userName: loginData.userName });

                authentication.isAuth = true;
                authentication.userName = loginData.userName;

            }, function (err) {
                logOut();
            });
        };

        function fillAuthData() {
            var authData = localStorageService.get("authorizationData");
            if (authData) {
                authentication.isAuth = true;
                authentication.userName = authData.userName;
            }
        }

        //#endregion

    }

})();