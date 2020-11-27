(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/restaurantlist/templates/menu-items.template.html',
  bindings: {
    items: '<',
    categoryName:'<'
  }
});

})();
