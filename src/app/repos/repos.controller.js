(function(){
  'use strict';

  angular
  .module('repos')
  .controller('ReposController', ReposController);

  function ReposController(githubRepos){

    var vm = this;

    vm.user = 'chicobentojr'
    vm.repos = [];
    vm.languages = [];
    vm.loading = true
    vm.search = '';

    githubRepos.getRepos(vm.user, function(response){
      vm.repos = response;
      vm.loading = false;
      response.forEach(function(item, index){
        if (item.language && $.inArray(item.language, vm.languages) == -1){
          vm.languages.push(item.language);
        }
      });
      $('.form .dropdown').dropdown({allowAdditions: true});
    });

    vm.searchRepos = function(repo){
        if(vm.search == -1) return true;
        var keyword = new RegExp(vm.search, 'i');
        return !vm.search || keyword.test(repo.name) || keyword.test(repo.language);
    }
  }
})();
