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
                          }/*,
                          {
                            state : 'landing.about',
                            text : 'About Us'
                          }*/
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
        $scope.apps = [
                        {
                          icon: 'images/app-icon/message.png',
                          name : 'Messages',
                          desc : 'FREE APP'
                        },
                        {
                          icon: 'images/app-icon/bulletin.png',
                          name : 'Bulletins',
                          desc : 'FREE APP'
                        },
                        {
                          icon: 'images/app-icon/video.png',
                          name : 'Voice & Video',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/workflow.png',
                          name : 'CRM',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/message.png',
                          name : 'Workflows',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/bulletin.png',
                          name : 'Document Management',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/video.png',
                          name : 'Task & Activities',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/workflow.png',
                          name : 'Meetins',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/message.png',
                          name : 'Events',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/bulletin.png',
                          name : 'Invoices',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/bulletin.png',
                          name : 'Refferals',
                          desc : 'FREE APP'
                        },
                        {
                          icon: 'images/app-icon/video.png',
                          name : 'File Transfer',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/workflow.png',
                          name : 'Projects',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/workflow.png',
                          name : 'Notes',
                          desc : ''
                        }
                      ];

        $scope.circles =  [
                            {
                              title : 'Hub3c – Connect…Communicate…Collaborate',
                              subtitle : 'All your apps, business network, communications in the one place. One username, One password, One platform.',
                              image : 'images/screen/1.png'
                            },
                            {
                              title : 'Projects app - Never miss a deadline again. Collaborate on projects from anywhere in the world.',
                              subtitle : 'Easily manage internal projects as well as invite connections to collaborate on projects. ',
                              image : 'images/screen/2.png'
                            },
                            {
                              title : 'Documents app - Easily upload your files. In just a few clicks share and collaborate with your team and external connections.',
                              subtitle : 'Documents is a super secure document management application with full audit and version control for your files.',
                              image : 'images/screen/3.png'
                            },
                            {
                              title : 'CRM app – Store company contacts & businesses, track opportunities with your interactive sales pipeline.',
                              subtitle : 'CRM is a powerful yet easy to use application that makes tracking sales opportunities and contacts a breeze.',
                              image : 'images/screen/4.png'
                            },
                            {
                              title : 'Bulletin app – Bring your company together, share and discuss ideas, encourage conversations. ',
                              subtitle : 'Connect with internal teams as well as businesses you are connected with…how powerful is that!',
                              image : 'images/screen/5.png'
                            }
                          ];
        $scope.partners = [
                            'images/partner/github.png',
                            'images/partner/bitbucket.png',
                            'images/partner/tidal.png',
                            'images/partner/roku.png',
                            'images/partner/toeic.png',
                            'images/partner/slack.png',
                          ];
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