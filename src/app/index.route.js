(function() {
  'use strict';

  angular
    .module('repos')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      //.when('/', { templateUrl: 'app/main/main.html', controller: 'MainController', controllerAs: 'main' })
      .when('/', { templateUrl: 'app/repos/repos.html', css: 'app/repos/repos.css', controller: 'ReposController', controllerAs: 'repos' })
      .otherwise({ redirectTo: '/' });
  }

})();
