var app = angular.module("hub3c", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

  	.state('landing', {
    	url: "landing",
    	templateUrl: "views/landing.html",
    	controller: function($scope){
      	$scope.showMenuMobile = false;
        $scope.changeMenu = function(){
          console.log('click');
          $scope.showMenuMobile = !$scope.showMenuMobile;
          console.log($scope.showMenuMobile);
        }
      }
  	})

  	.state('landing.home', {
	    url: "landing/home",
	    templateUrl: 'views/parsial/home.html',
        controller: function($scope){
        	console.log('home');
        }
  	});
  	$urlRouterProvider.otherwise("landing/home");
});
app.controller('MainCtrl', function ($state) {
    $state.transitionTo('landing.home');
})