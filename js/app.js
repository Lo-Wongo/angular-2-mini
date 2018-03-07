// angular.module('myApp', []);

//Injecting ui-router into an Angular application
    //add ui-router's CDN into our index.html by adding a script tag below the angular CDN
    // ui-router CDN = https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js

    // in app.js, inject ui-router into myApp, and chain a .config to myApp that uses an anonymous function, just like you would for a controller or service
    //inject $stateProvider and $urlRouterProvider as parameters into the anonymous function
angular.module('myApp', ['ui.router']).config( function( $stateProvider, $urlRouterProvider ) {
    //Call $stateProvider and chain a .state for each feature route (there should only be three)
            //.state shoud be invoked and have 2 parameters (the string of the route(must match strings used in previous step, i.e the ui-sref), and an object with 3 props)
                    //url: = a string that specifies the route
                    //templateUrl: = a string that is a file path to the html
                    //controller: = a string that specifies what controller the html should use (only use controller for the features that have a controller)
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/homeTmpl.html'
      })
      .state('products', {
        url: '/products/:id',
        templateUrl: 'js/products/productsTmpl.html',
        controller: 'productsCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'js/settings/settingsTmpl.html'
      });
   // call $urlRouterProvider and chain a .otherwise and pass in '/'
    $urlRouterProvider
      .otherwise('/');
  });
  