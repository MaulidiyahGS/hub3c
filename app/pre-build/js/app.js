var app = angular.module("hub3c", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

  	.state('landing', {
    	url: "landing",
    	templateUrl: "views/landing.html",
    	controller: function($scope){
      	$scope.showMenuMobile = false;
        $scope.changeMenu = function(){
          $scope.showMenuMobile = !$scope.showMenuMobile;
        }
        $scope.menus =  [
                          {
                            state : 'landing.home',
                            text : 'hub3c'
                          },
                          {
                            state : 'landing.app',
                            text : 'Apps'
                          },
                          {
                            state : 'landing.partner',
                            text : 'Global Partner Program'
                          },
                          {
                            state : 'landing.about',
                            text : 'About Us'
                          }
                        ];
      }
  	})

  	.state('landing.home', {
	    url: "home",
	    templateUrl: 'views/parsial/home.html',
      controller: function($scope){
      	console.log('home');
      }
  	})

    .state('landing.app', {
      url: "app",
      templateUrl: 'views/parsial/app.html',
      controller: function($scope){
        console.log('app');
      }
    })

    .state('landing.partner', {
      url: "partner",
      templateUrl: 'views/parsial/partner.html',
      controller: function($scope){
        console.log('partner');
      }
    })

    .state('landing.about', {
      url: "about",
      templateUrl: 'views/parsial/about.html',
      controller: function($scope){
        console.log('about');
      }
    })

    .state('login', {
      url: "login",
      templateUrl: 'views/login.html',
      controller: function($scope){
        console.log('login');
      }
    });
  	/*$urlRouterProvider.otherwise(function($injector) {
      var $state = $injector.get('$state');
      $state.go('landing.home');
    });*/
});
/*app.controller('MainCtrl', function ($scope, $state) {
    $state.go('landing.home');
    $scope.goTo = function(state){
      $state.go(state);
    }
})*/

app.run(function($rootScope, $state){
  $state.go('landing.home');
  $rootScope.goTo = function(state){
    $state.go(state);
  }
});