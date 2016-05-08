(function(){
  'use strict';

  angular
  .module('repos')
  .controller('ReposController', ReposController);

  function ReposController(githubRepos){

    var vm = this;

    vm.user = 'chicobentojr'
    vm.repos = [];
    vm.loading = true
    vm.search = null;

    githubRepos.getRepos(vm.user, function(response){
      vm.repos = response;
      vm.loading = false;
    });

    vm.searchRepos = function(repo){
      var keyword = new RegExp(vm.search, 'i');
      return !vm.search || keyword.test(repo.name) || keyword.test(repo.language);
    }
  }
})();
