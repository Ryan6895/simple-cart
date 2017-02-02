angular.module('myApp')
    .controller('mainCtrl', function($scope, productService, cartService) {
        $scope.products = productService.getProducts();

        $scope.addToCart = function(product) {
            cartService.addToCart(product).then(function() {
                cartService.getCart().then(function(res) {
                    $scope.cart = res.data;
                })
            })
        }
        cartService.getCart().then(function(res) {
            $scope.cart = res.data;
        })
    })
