var myApp = angular.module("myApp", ["ngMaterial"]);

myApp.controller("myController",
    function($scope) {

        $scope.customers = [
            {
                firstName: "Michał",
                lastName: "Gorlewski",
                city: "Mlawa",
                address: "Warszawska 19",
                orders: [
                    { product: "Ipod", quantity: 1, unitPrice: 399.99 },
                    { product: "Speakers", quantity: 1, unitPrice: 499.99 }
                ]
            },
            {
                firstName: "Jan",
                lastName: "Kowalski",
                city: "Warsaw",
                address: "Armii Krajowej 15",
                orders: [
                    { product: "Baseball", quantity: 5, unitPrice: 9.99 },
                    { product: "Bat", quantity: 1, unitPrice: 19.99 },
                    { product: "Bat", quantity: 1, unitPrice: 19.99 }
                ]

            },
            {
                firstName: "Jan",
                lastName: "Kowalski",
                city: "Warsaw",
                address: "Armii Krajowej 15",
                orders: [
                    { product: "Baseball", quantity: 5, unitPrice: 9.99 },
                    { product: "Bat", quantity: 1, unitPrice: 19.99 }
                ]

            },
            {
                firstName: "Jan",
                lastName: "Kowalski",
                city: "Warsaw",
                address: "Armii Krajowej 15",
                orders: [
                    { product: "Baseball", quantity: 5, unitPrice: 9.99 },
                    { product: "Bat", quantity: 1, unitPrice: 19.99 }
                ]

            },
            {
                firstName: "Jan",
                surname: "Kowalski",
                city: "Warsaw",
                address: "Armii Krajowej 15",
                orders: [
                    { product: "Baseball", quantity: 5, unitPrice: 9.99 },
                    { product: "Bat", quantity: 1, unitPrice: 19.99 }
                ]
            }
        ];

        $scope.ordersCount = function(orders) {
            if (orders.length != null)
                return orders.length;
            else
                return 0;
        }


        $scope.addCustomer = function() {
            $scope.newCustomer.orders = [];
            var copy = angular.copy($scope.newCustomer);
            $scope.customers.push(copy);
            $scope.newCustomer = { firstName: "", lastName: "", city: "", orders: [], address: "" };
        }


    });

