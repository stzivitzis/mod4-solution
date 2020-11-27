(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items','categoryName']
function ItemDetailController(items,categoryName) {
  var itemDetail = this;
  console.log(categoryName);
  itemDetail.items = items;
  itemDetail.categoryName = categoryName;
}


})();
