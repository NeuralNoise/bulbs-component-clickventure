angular.module('bulbs.clickventure.edit.node.copy', [
  'bulbs.clickventure.edit.link',
  'bulbs.clickventure.edit.node.container',
  'bulbs.clickventure.edit.service',
  'ui.bootstrap.tooltip'
])
  .directive('clickventureEditNodeCopy', [
    '$window', '$timeout', 'ClickventureEdit',
    function ($window, $timeout, ClickventureEdit) {
      return {
        restrict: 'E',
        templateUrl: 'clickventure-edit-node/clickventure-edit-node-copy/clickventure-edit-node-copy.html',
        require: '^clickventureEdit',
        scope: {
          node: '='
        },
        controller: [
          '$scope',
          function ($scope) {
            $scope.configPageTitle = 'Copy';

            $scope.addLink = ClickventureEdit.addLink;
            $scope.data = ClickventureEdit.getData();
            $scope.linkStyles = ClickventureEdit.getValidLinkStyles();
            $scope.reorderLink = ClickventureEdit.reorderLink;
          }
        ],
        link: function (scope, elements) {
          scope.$watch(
            'data.configPageActive',
            $timeout.bind(null, function (newVal) {
              if (newVal === scope.configPageTitle) {
                $window.picturefill(elements[0]);
              }
            })
          );

          scope.$watch(
            'data.nodeActive',
            $timeout.bind(null, function () {
              $window.picturefill(elements[0]);
            })
          );
        }
      };
    }
  ]);
