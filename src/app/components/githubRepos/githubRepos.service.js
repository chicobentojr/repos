(function(){
  'use strict';

  angular
  .module('repos')
  .factory('githubRepos', githubRepos);

  function githubRepos($http){

    var githubRepos = {};

    githubRepos.getRepos = function(user, callback){
      $http({
        url: 'https://api.github.com/users/'+user+'/repos'
      }).success(function(response){
        callback(response);
      });
    }

    return githubRepos;
  }
})();
