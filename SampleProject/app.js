(function() {
  var app = angular.module("githubviewer", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl: "main.html",
        controller: "maincontroller"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
       .when("/user/:username/:reponame", {
        templateUrl: "repodetails.html",
        controller: "RepoController"
      })
      .otherwise({
        redirectTo: "/main"
      });
  });
}());