var app = angular.module("hub3c", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/parsial/home.html',
      controller: function($scope){
        console.log('home');
      }
    })
    .when('/app', {
      templateUrl: 'views/parsial/app.html',
      controller: function($scope){
        $scope.apps = [
                        {
                          icon: 'images/app-icon/app-icon-messages.png',
                          name : 'Messages',
                          desc : 'FREE APP'
                        },
                        {
                          icon: 'images/app-icon/app-icon-bulletins.png',
                          name : 'Bulletins',
                          desc : 'FREE APP'
                        },
                        {
                          icon: 'images/app-icon/app-icon-videochat.png',
                          name : 'Voice & Video',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-crm.png',
                          name : 'CRM',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-workflow.png',
                          name : 'Workflows',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-documents.png',
                          name : 'Document Management',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-job2job.png',
                          name : 'Task & Activities',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-filetransfer.png',
                          name : 'File Transfer',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-project.png',
                          name : 'Projects',
                          desc : ''
                        },
                        {
                          icon: 'images/app-icon/app-icon-storage.png',
                          name : 'Storage',
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
    .when('/partner', {
      templateUrl: 'views/parsial/partner.html',
      controller: function($scope){
        console.log('partner');
      }
    })
    .when('/register/:as', {
      templateUrl: 'views/parsial/register.html',
      controller: function($scope, $routeParams){
        console.log('register');
        $scope.form = {
                        input : [
                                  {
                                    name: 'Register as',
                                    input : 'select',
                                    type : 'single',
                                    option: [
                                              'App Partner',
                                              'Business Support Partner',
                                              'Channel Partner'
                                            ],
                                    note : '',
                                    model : 'registerAs'
                                  },
                                  {
                                    name: 'Business Name',
                                    input : 'input',
                                    type : 'text',
                                    note : '',
                                    model : 'business'
                                  },
                                  {
                                    name: 'Contact',
                                    input : 'input',
                                    type : 'text',
                                    note : '',
                                    model : 'contact'
                                  },
                                  {
                                    name: 'Email',
                                    input : 'input',
                                    type : 'email',
                                    note : '',
                                    model : 'email'
                                  },
                                  {
                                    name: 'Country',
                                    input : 'select',
                                    type : 'single',
                                    option: [
                                              "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
                                            ],
                                    note : '',
                                    model : 'country'
                                  },
                                  {
                                    name: 'Phone',
                                    input : 'input',
                                    type : 'number',
                                    note : 'Provide the number with country code, ex. +365 895-99-24',
                                    model : 'phone'
                                  }
                                ],
                        data : {
                          registerAs : $routeParams.as,
                          business: '',
                          contact : '',
                          email : '',
                          country : 'Australia',
                          phone: ''
                        }
                      };
        $scope.register = function(){
          var empty = [];
          for(var i in $scope.form.data){
            if($scope.form.data[i] == ''){
              empty.push(i);
            }
          }
          if(empty.length > 0){
            alert(empty.join(', ')+' cannot be empty');
          }
        } 
      }
    })
    .otherwise({ redirectTo: '/' });
});

app.run(function($rootScope, $location, $routeParams){
  $rootScope.params = $routeParams;
  $rootScope.isActive = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };
  $rootScope.showMenuMobile = false;
  $rootScope.changeMenu = function(){
    $rootScope.showMenuMobile = !$rootScope.showMenuMobile;
  }
  $rootScope.menus =  [
                    {
                      url : '/',
                      text : 'hub3c'
                    },
                    {
                      url : '/app',
                      text : 'Apps'
                    },
                    {
                      url : '/partner',
                      text : 'Global Partner Program'
                    }/*,
                    {
                      state : 'landing.about',
                      text : 'About Us'
                    }*/
                  ];
});