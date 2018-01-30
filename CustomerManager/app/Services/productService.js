angular.module('customersApp').service('productService', [
    function () {
        var service = this;

        var products = [
            { name: "Ipod", price: 399.99 },
            { name: "Speakers", price: 499.99 },
            { name: "Baseball", price: 5.99 },
            { name: "Smock", price: 17.99 },
            { name: "Bat", price: 10.99 },
            { name: "Adapter", price: 12.99 },
            { name: "Laptop", price: 550 },
            { name: "Chargers", price: 25.99 },
            { name: "Stick", price: 12.99 },
            { name: "Irygator", price: 13.99 },
            { name: "TV", price: 780 },
            { name: "Brusher", price: 207.87 }
        ];

        service.getProducts = function () {
            return products;
        }
    }
]);