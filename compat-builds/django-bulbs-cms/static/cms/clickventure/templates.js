angular.module('bulbs.clickventure.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('clickventure-edit-link/clickventure-edit-link.html',
    "<div class=clickventure-link><div class=\"form-control form-group node-text\"><onion-editor ng-model=link.body role=singleline formatting=bold,italic,strike placeholder=Body></onion-editor></div><div class=row><label class=col-xs-4><span>To page:</span><select class=form-control ng-model=link.to_node ng-options=\"node.id as node.title || node.id for node in nodes\"></select></label><label class=col-xs-3><span>Transition:</span><select class=form-control ng-model=link.transition ng-options=\"transition for transition in nodeTransitions\"></select></label><label class=col-xs-3><span>Style:</span><select class=form-control ng-options=\"style.toLowerCase() as style for style in linkStyles\" ng-model=link.link_style></select></label><label class=col-xs-2><span>Float:</span> <input type=checkbox class=form-control ng-model=link.float></label></div></div>"
  );


  $templateCache.put('clickventure-edit-node-list/clickventure-edit-node-list-node/clickventure-edit-node-list-node.html',
    "<div class=clickventure-edit-node-list-node-status ng-class=\"{\n" +
    "      'clickventure-edit-node-list-node-status-start': node.start,\n" +
    "      'clickventure-edit-node-list-node-status-finish': node.finish\n" +
    "    }\"></div><div class=clickventure-edit-node-list-node-title><span ng-show=!!node.title ng-bind-html=node.title></span> <span ng-show=!node.title>Page {{ node.id }}</span></div><div class=clickventure-edit-node-list-node-tools><ng-transclude></ng-transclude></div>"
  );


  $templateCache.put('clickventure-edit-node-list/clickventure-edit-node-list.html',
    "<ol><li ng-repeat=\"node in nodeData.nodes\" ng-click=selectNode(node)><clickventure-edit-node-list-node node=node ng-class=\"{'clickventure-edit-node-list-node-active': nodeData.view[node.id].active}\"><input class=clickventure-edit-node-list-node-tools-item type=number min=1 step=1 ng-model=nodeData.view[node.id].order ng-pattern=\"/^[1-9]{1}[0-9]*$/\" ng-keyup=\"$event.which === 13 && reorderNode($index, nodeData.view[node.id].order - 1)\" ng-blur=\"reorderNode($index, nodeData.view[node.id].order - 1)\"> <button class=\"btn btn-link btn-xs clickventure-edit-node-list-node-tools-item\" ng-click=\"reorderNode($index, $index - 1)\" ng-disabled=$first><span class=\"glyphicon glyphicon-chevron-up\"></span></button> <button class=\"btn btn-link btn-xs clickventure-edit-node-list-node-tools-item\" ng-click=\"reorderNode($index, $index + 1)\" ng-disabled=$last><span class=\"glyphicon glyphicon-chevron-down\"></span></button></clickventure-edit-node-list-node></li></ol>"
  );


  $templateCache.put('clickventure-edit-node-toolbar/clickventure-edit-node-toolbar.html',
    "<div class=clickventure-edit-node-toolbar-title>Edit</div><div class=\"clickventure-edit-node-toolbar-view btn-group\"><button class=\"btn btn-default\">Settings</button> <button class=\"btn btn-default\">Copy</button></div><div class=clickventure-edit-node-toolbar-preview><a target=_blank href=\"/r/{{ article.id }}#{{ activeNode.id }}\"><i class=\"glyphicon glyphicon-share-alt\"></i> <span>Preview Page</span></a></div>"
  );


  $templateCache.put('clickventure-edit-node/clickventure-edit-node.html',
    "<div class=clickventure-node><div class=\"form-control form-group clearfix node-text\"><onion-editor ng-model=node.title role=singleline formatting=bold,italic,strike placeholder=\"Name (used for display in CMS)\"></onion-editor></div><div class=form-group><label class=checkbox-inline><input type=checkbox ng-model=node.start> <span>Start</span></label><label class=checkbox-inline><input type=checkbox ng-model=node.finish> <span>Finish</span></label><label class=checkbox-inline><input type=checkbox ng-model=node.shareable> <span>Shareable</span></label><button ng-click=cloneNode({node:node}) class=\"btn btn-xs btn-default checkbox-inline pull-right\"><i class=\"fa fa-copy\"></i> <span>Clone Page</span></button></div><div ng-show=node.shareable class=form-group><span>Share Message</span><div class=form-control><onion-editor role=singleline ng-model=node.share_text placeholder=\"Message for sharing\"></onion-editor></div></div><div class=well><onion-editor ng-model=node.body role=multiline placeholder=\"Body (displays on site)\"></onion-editor></div><div class=\"navbar navbar-default\"><label><span>Default link Style</span><select class=form-control ng-options=\"style.toLowerCase() as style for style in linkStyles\" ng-model=node.link_style></select></label></div><div class=panel-group><div ng-repeat=\"link in node.links\" class=\"clearfix panel panel-default\"><div class=panel-heading><h4 class=panel-title><span>Link</span><div class=\"btn-group pull-right\"><button class=\"btn btn-link btn-xs\" ng-click=\"onMoveListObject(node.links, $index, $index + 1)\" ng-disabled=$last><span class=\"glyphicon glyphicon-chevron-down\"></span></button> <button class=\"btn btn-link btn-xs\" ng-click=\"onDeleteObject(node.links, link)\"><span class=\"glyphicon glyphicon-remove text-danger\"></span></button> <button class=\"btn btn-link btn-xs\" ng-click=\"onMoveListObject(node.links, $index, $index - 1)\" ng-disabled=\"$index == 0\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button></div></h4></div><div class=panel-body><clickventure-edit-link nodes=nodes node=node link=link></clickventure-edit-link></div></div></div><button class=\"btn btn-default\" ng-click=onAddLink(node)><span class=\"glyphicon glyphicon-plus\"></span> <span>Add Link</span></button><div class=row><h3>Inbound links</h3><div ng-repeat=\"node in inboundNodes\"><a ng-bind=node.title ng-click=selectNode({node:node})></a></div></div></div>"
  );


  $templateCache.put('clickventure-edit.html',
    "<div class=clickventure-edit-col-1><clickventure-edit-node-list></clickventure-edit-node-list><div class=clickventure-edit-node-list-tools><button class=\"btn btn-primary\" ng-click=onAddNode()><span class=\"glyphicon glyphicon-plus\"></span> <span>New Page</span></button> <button class=\"btn btn-default\" ng-click=validatePages()><span class=\"glyphicon glyphicon-ok\"></span> <span>Run Check</span></button></div></div><div class=clickventure-edit-col-2><clickventure-edit-node-toolbar></clickventure-edit-node-toolbar><div ng-show=!isEditing><h3><span class=\"fa fa-arrow-left\"></span> <span>Create or select a page</span></h3></div><div ng-show=isEditing><clickventure-edit-node nodes=article.nodes node=selectedNode select-node=selectNode(node) clone-node=onCloneNode(node)></clickventure-edit-node></div></div>"
  );

}]);
