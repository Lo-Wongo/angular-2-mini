//Updating productsSrvc.js to hit an API to get an array of products

// angular.module('myApp').service('productsSrvc', function() {

// });

//inject$ http into service
//create a method on the service called getShoeData
//getShoeData should return a promise of a $http GET request
        //the base url of this request should be https://practiceapi.devmountain.com/products
        //a category query should be added to the url with a value of shoes
angular.module('myApp').service('productsSrvc', function( $http ) {
    this.getShoeData = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products?category=shoes'
      });
    };
//create a method called getSockData
//getSock should return a promise of an $http GET request
    //the base url of this request should be: https://practiceapi.devmountain.com/products
    //a category query should be added to the url with a value of socks
    this.getSockData = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products?category=socks'
      });
    };
  });
