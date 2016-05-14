'use strict';

angular.module('senshinJikanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('member', {
        url: '/member',
        template: '<member></member>'
      });
  });
