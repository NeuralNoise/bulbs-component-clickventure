'use strict';

angular.module('bulbs.clickventure.edit.link', [])
  .directive('clickventureEditLink', function (routes) {
    return {
      restrict: 'E',
      templateUrl: 'clickventure-edit-link/clickventure-edit-link.html',
      scope: false,
      require: '^clickventureNode'
    };
  });
