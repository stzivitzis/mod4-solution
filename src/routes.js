(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantlist/templates/home.template.html'
  })


  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/restaurantlist/templates/main-restaurantlist.template.html',
    controller: 'MainRestaurantListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/restaurantlist/templates/menu-items-main.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams,MenuDataService) {
                return MenuDataService.getAllCategories().then(
                    function(queriedItems){
                      return MenuDataService.getItemsForCategory(queriedItems.data[$stateParams.itemId].short_name)
                        .then(function (menuItemsData) {

                          return menuItemsData.data.menu_items;
                        });

                    }


                );

            }],
      categoryName: ['$stateParams', 'MenuDataService',
            function ($stateParams,MenuDataService) {
                return MenuDataService.getAllCategories().then(
                    function(queriedItems){
                        return queriedItems.data[$stateParams.itemId].name;
                    }
                );
            }]
    }

  });
}

})();
