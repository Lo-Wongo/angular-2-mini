//create a new Angular controller called productsCtrl
//inject $scope, $stateParams, and productsSrvc

//add a conditional to see if id on $stateParams is either 'shoes' or 'socks'
    //if it is shoes, call the 'getShoeData' method on the productsSrvc
            //Catch the response's data of this request and assign it to a $scope variable called productData
    //if it is 'socks', call the getSockData method on the productsSrvc
            //Catch the response's data of this request and assign it to a $scope variable called productData
//head over to productsTmpl.html and add a div element that uses ng-repeat on $scope.productData
//add three p elements inside the div to show the value of type, color, and size

angular.module('myApp').controller('productsCtrl', function( $scope, $stateParams, productsSrvc ) {

    if ( $stateParams.id === 'shoes' ) {
      productsSrvc.getShoeData().then( function( response ) {
        $scope.productData = response.data;
      });
    } else if ( $stateParams.id === 'socks' ) {
      productsSrvc.getSockData().then( function( response ) {
        $scope.productData = response.data;
      });
    }
  
  });