var app = angular.module("hub3c", ['ngRoute']);

app.config(['$locationProvider', '$routeProvider',function config($locationProvider, $routeProvider) {
    $routeProvider
    .when('/', {
      	templateUrl: 'views/home.html'
    })
    .otherwise('/');
}
]);