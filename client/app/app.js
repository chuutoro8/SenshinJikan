'use strict';

angular.module('senshinJikanApp', [
  'senshinJikanApp.auth',
  'senshinJikanApp.admin',
  'senshinJikanApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
