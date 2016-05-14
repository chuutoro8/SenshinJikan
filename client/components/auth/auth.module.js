'use strict';

angular.module('senshinJikanApp.auth', [
  'senshinJikanApp.constants',
  'senshinJikanApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
