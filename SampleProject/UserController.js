(function() {

  var app = angular.module("githubviewer");


  var UserController = function($scope, github,$routeParams) {
    var oncomplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(ongetRepos, onerror);

    };

    var ongetRepos = function(data) {
      $scope.repos = data;
      $location.has("userdetails");
      $anchorScroll();
    };

    var onerror = function(reason) {
      $scope.error = "Could not get data";
    };

    $scope.username = $routeParams.username;
    $scope.reposortorder = "-stargazers_count";
    github.getUser($scope.username).then(oncomplete,onerror);
  };

  app.controller("UserController", UserController);
}());