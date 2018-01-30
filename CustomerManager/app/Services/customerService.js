angular.module('customersApp').service('customerService', [
    function () {
        var service = this;

        var customers = [
            {
                firstName: "Michał",
                lastName: "Gorlewski",
                city: "Mawa",
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
                    { product: "Baseball", quantity: 4, unitPrice: 5.99 },
                    { product: "Smock", quantity: 1, unitPrice: 17.99 },
                    { product: "Bat", quantity: 1, unitPrice: 10.99 },
                    { product: "Adapter", quantity: 1, unitPrice: 12.99 }
                ]
            },
            {
                firstName: "Krzysztof",
                lastName: "Kowalczyk",
                city: "Bydgoszcz",
                address: "Powstańców Wielkopolskich 12",
                orders: [
                    { product: "Laptop", quantity: 7, unitPrice: 550 },
                    { product: "Chargers", quantity: 1, unitPrice: 25.99 }
                ]
            },
            {
                firstName: "Marek",
                lastName: "Żółtowski",
                city: "Poznań",
                address: "Lawicza Liszki 4",
                orders: [
                    { product: "Stick", quantity: 5, unitPrice: 12.99 },
                    { product: "Irygator", quantity: 1, unitPrice: 13.99 }
                ]
            },
            {
                firstName: "Arkadiusz",
                lastName: "Gromadzki",
                city: "Gdańsk",
                address: "Różana 54",
                orders: [
                    { product: "TV", quantity: 2, unitPrice: 780 },
                    { product: "Brusher", quantity: 13, unitPrice: 15.99 }
                ]
            }
        ];

        service.getCustomers = function () {
            return customers;
        }
    }
]);
