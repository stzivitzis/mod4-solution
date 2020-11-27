(function () {
'use strict';

angular.module('MenuApp')
.controller('MainRestaurantListController', MainRestaurantListController);


MainRestaurantListController.$inject = ['items'];
function MainRestaurantListController(items) {
  var mainList = this;
  mainList.items = items.data;
}

})();
