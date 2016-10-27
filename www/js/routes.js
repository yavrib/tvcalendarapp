angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('today', {
    url: '/today',
    templateUrl: 'templates/today.html',
    controller: 'todayCtrl'
  })

  .state('explore', {
    url: '/explore',
    templateUrl: 'templates/explore.html',
    controller: 'exploreCtrl'
  })

  .state('myShows', {
    url: '/myShows',
    templateUrl: 'templates/myShows.html',
    controller: 'myShowsCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/today')

  

});