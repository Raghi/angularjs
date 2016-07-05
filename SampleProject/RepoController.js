(function() {

  var app = angular.module("githubviewer");


  var RepoController = function($scope, github,$routeParams) {
    
    var reponame = $routeParams.reponame;
    var user = $routeParams.user;    

    var oncomplete = function(data) {
      $scope.user = data;
    };
    
    var onerror = function(reason) {
      $scope.error = reason;
    };

    github.getRepoDetails(user,reponame).then(oncomplete,onerror);
    
  };

  app.controller("RepoController", RepoController);
}());