var app = angular.module("customersApp", ["ui.router", "ngRoute", "ngMaterial"]);

app.config(function ($stateProvider, $locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider
        .when("/customers", {
            templateUrl: "Views/Customers.html",
            controller: "customersController"
        })
        .when("/orders", {
            templateUrl: "Views/orders.html",
            controller: "customersController"
        })
        .when("/view1", {
            templateUrl: "Views/view1.html",
            controller: "customersController"
        })
        .when("/", {
            templateUrl: "Views/Customers.html",
            controller: "customersController"
        })
        .when("/index.html", {
            templateUrl: "Views/Customers.html",
            controller: "customersController"
        })
        .when('/customerorder/:customerID',
        {
            controller: 'customersController',
            templateUrl: 'Views/customerorder.html'
        })
       









    //$stateProvider.state("customers",
    //    {
    //        name: "customers",
    //        url: "/customers",
    //        controller: "customersController",
    //        templateUrl: "Views/customers.html"
    //    });
    //$stateProvider.state("view1",
    //    {
    //        name: "view1",
    //        url: "/view1",
    //        controller: "customersController",
    //        templateUrl: "Views/view1.html"
    //    });
    //$stateProvider.state("index",
    //    {
    //        name: "index",
    //        url: "/index.html",
    //        controller: "customersController",
    //        templateUrl: "index.html"
    //    });
    //$stateProvider.state("Home",
    //    {
    //        name: "Home",
    //        url: "/",
    //        controller: "customersController",
    //        templateUrl: ""
    //    });
    //$stateProvider.state("otherwise",
    //    {
    //        name: "otherwise",
    //        url: "/otherwise",
    //        controller: "customersController",
    //        templateUrl: "Views/Customers.html"
    //    });

}
);

