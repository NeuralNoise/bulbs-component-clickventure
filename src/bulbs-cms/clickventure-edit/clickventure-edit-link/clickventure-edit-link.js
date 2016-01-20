angular.module('bulbs.clickventure.edit.link', [
  'autocompleteBasic',
  'confirmationModal.factory',
  'bulbs.clickventure.edit.nodeNameFilter',
  'bulbs.clickventure.edit.service',
  'uuid4'
])
  .directive('clickventureEditLink', function (routes) {
    return {
      restrict: 'E',
      templateUrl: 'clickventure-edit-link/clickventure-edit-link.html',
      scope: {
        node: '=',
        link: '='
      },
      require: '^clickventureNode',
      controller: [
        '$q', '$scope', 'ClickventureEdit', 'ConfirmationModal', 'uuid4',
        function ($q, $scope, ClickventureEdit, ConfirmationModal, uuid4) {

          $scope.uuid = uuid4.generate();

          $scope.deleteLink = ClickventureEdit.deleteLink;
          $scope.updateInboundLinks = ClickventureEdit.updateInboundLinks;
          $scope.linkStyles = ClickventureEdit.getValidLinkStyles();
          $scope.nodeData = ClickventureEdit.getData();

          $scope.deleteLink = function (node, link) {
            var modalScope = $scope.$new();

            modalScope.modalOnOk = ClickventureEdit.deleteLink.bind(ClickventureEdit, node, link);
            modalScope.modalOnCancel = function () {};
            modalScope.modalTitle = 'Confirm Link Delete';
            modalScope.modalBody = 'Are you sure you wish to delete this link? This action cannot be undone!';
            modalScope.modalOkText = 'Delete';
            modalScope.modalCancelText = 'Cancel';

            new ConfirmationModal(modalScope);
          };

          $scope.nodeDisplay = function (id) {
            var view = $scope.nodeData.view[id];
            return '(' + view.order + ') ' + view.node.title;
          };

          $scope.searchTerm = '';
          $scope.searchNodes = function (searchTerm) {
            var selections = [];

            // check if they're searching by order number first
            var searchNumber = parseInt(searchTerm, 10);
            if (searchNumber > 0) {
              var nodeId = Object.keys($scope.nodeData.view).find(function (id) {
                return $scope.nodeData.view[id].order === searchNumber;
              });

              if (nodeId) {
                selections.push(parseInt(nodeId, 10));
              }
            } else {
              // not a number, try searching as a string
              selections = $scope.nodeData.nodes
                .filter(function (node) {
                  return !!node.title.match(new RegExp(searchTerm, 'i'));
                })
                .map(function (node) {
                  return node.id;
                });
            }

            return $q.when(selections);
          };
        }
      ]
    };
  });
