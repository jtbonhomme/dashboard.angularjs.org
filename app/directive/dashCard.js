'use strict';

angular.module('dashboard.angularjs.orgApp')
  .directive('dashCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dashCard directive');
      }
    };
  });
