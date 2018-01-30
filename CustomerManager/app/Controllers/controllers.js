app.controller("customersController",
    function ($scope, $log, $q, $timeout, customerService, productService, $routeParams) {

        $scope.customerName = $routeParams.customerID;
        $scope.id;
        $scope.checkCustomerID = function (customerName) {
            for (var i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].firstName === customerName) {
                    $scope.id = [i];
                }
            }
        }
        $scope.customers = customerService.getCustomers();
        $scope.products = productService.getProducts();
        $scope.addOrder = function () {
            $scope.checkIfExist = 0;
            for (var i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].firstName === $scope.newOrder.firstName && $scope.customers[i].lastName === $scope.newOrder.lastName) {
                    for (var j = 0; j < $scope.customers[i].orders.length; j++) {
                        if ($scope.customers[i].orders[j].product === $scope.newProduct.name) {
                            $scope.customers[i].orders[j].quantity += $scope.newProduct.quantity;
                            $scope.checkIfExist = 1;
                        }
                    }
                    if ($scope.checkIfExist === 0) {
                        for (var k = 0; k < $scope.customers.length; k++) {
                            if ($scope.customers[k].lastName === $scope.newOrder.lastName) {
                                var copy = angular.copy($scope.newProductOrder);
                                $scope.customers[k].orders.push(copy);
                            }
                        }
                    }
                }
            }
            $scope.newProduct.quantity = 1;
            $scope.selecteditemCustomer = null;
            $scope.searchTextCustomers = null;
            $scope.selectedItemProduct = null;
            $scope.searchTextProduct = null;
            $scope.newOrder.firstName = "";
        }        
        $scope.newOrder = {
            firstName: "",
            lastName: "",
            city: "",
            address: "",
            orders: [
                { product: "", quantity: 0, unitPrice: 0 }
            ]
        }
        $scope.newProduct = {
            name: "",
            price: 0,
            quantity: 1
        }
        $scope.newCustomer = {};
        $scope.addCustomer = function () {
            $scope.newCustomer.orders = [];
            var copy = angular.copy($scope.newCustomer);
            $scope.customers.push(copy);
            $scope.newCustomer = { firstName: "", lastName: "", city: "", orders: [], address: "" };
        }
        $scope.totalOrders = function (order) {
            var x, y = 0;
            for (var i = 0; i < order.length; i++) {
                x = 0;
                x = order[i].quantity * order[i].unitPrice;
                y = y + x;
            }
            return y;
        }
        $scope.imagePath = "Content/img/PlayerMale-48.png";
        function createFilterForCustomers(query) {
            return function filterFn(item) {
                var test = (item.firstName + " " + item.lastName).indexOf(query) !== -1;
                return test;
            };
        }
        $scope.querySearch = function (query) {
            var results = query ? $scope.customers.filter(createFilterForCustomers(query)) : $scope.customers;

            return results;
        }
        $scope.newProductOrder = {};
        $scope.onProductChange = function (product) {
            $scope.newProduct.price = 0;
            if (product != null) {
                for (var i = 0; i < $scope.products.length; i++) {
                    if (product.name === $scope.products[i].name) {
                        $scope.newProduct.price = $scope.products[i].price;
                        $scope.newProduct.name = product.name;
                    }
                }
                $scope.newProductOrder.product = product.name;
                $scope.newProductOrder.quantity = $scope.newProduct.quantity;
                $scope.newProductOrder.unitPrice = $scope.newProduct.price;
            }
        }
        $scope.onCustomerChange = function (customer) {
            if (customer != null) {
                $scope.newOrder.firstName = customer.firstName;
                $scope.newOrder.lastName = customer.lastName;
            }
        }
        function createFilterForProducts(query) {
            return function filterFn(item) {
                var test = item.name.indexOf(query) !== -1;
                return test;
            };
        }
        $scope.querySearchProducts = function (query) {
            var results = query ? $scope.products.filter(createFilterForProducts(query)) : $scope.products;
            return results;
        }
        $scope.sortColumn = "product";
        $scope.reverseSort = false;
        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn === column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function (column) {
            if ($scope.sortColumn === column) {
                return $scope.reverseSort ? "arrow-down" : "arrow-up"
            }
            return "";
        }
        $scope.removeCustomer = function (name) {
            for (var i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].firstName === name) {
                    $scope.customers.splice([i], 1);
                }
            }
        }




    });