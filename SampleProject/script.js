// Code goes here
/*(function() {

  var app = angular.module("githubviewer", []);


  var maincontroller = function($scope, $http, $interval, $log, $anchorScroll, $location) {
    var oncomplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(ongetRepos, onerror);

    };

    var ongetRepos = function(response) {
      $scope.repos = response.data;
      $location.has("userdetails");
      $anchorScroll();
    };

    var onerror = function(reason) {
      $scope.error = "Could not get data";
    };

    $scope.search = function(username) {
      $log.info("Searching for : " + username);
      $http.get("https://api.github.com/users/" + username).then(oncomplete, onerror);

      if (countdowninterval)
        $interval.cancel(countdowninterval);
    };

    var decrement = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) $scope.search($scope.username);
    };

    var countdowninterval = null;
    var startCountDown = function() {
      countdowninterval = $interval(decrement, 1000, $scope.countdown);
    };

    $scope.username = "angular";
    $scope.message = "Hello, " + $scope.username;
    $scope.reposortorder = "-stargazers_count";
    $scope.countdown = 5;
    startCountDown();
  };

  app.controller("maincontroller", maincontroller);
}());*/

(function() {

  var app = angular.module("githubviewer");


  var maincontroller = function($scope, github, $interval, $log, $anchorScroll, $location) {
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

    $scope.search = function(username) {
      $log.info("Searching for : " + username);
      github.getUser(username).then(oncomplete, onerror);

      if (countdowninterval)
        $interval.cancel(countdowninterval);
    };

    var decrement = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) $scope.search($scope.username);
    };

    var countdowninterval = null;
    var startCountDown = function() {
      countdowninterval = $interval(decrement, 1000, $scope.countdown);
    };

    $scope.username = "angular";
    $scope.message = "Hello, " + $scope.username;
    $scope.reposortorder = "-stargazers_count";
    $scope.countdown = 5;
    startCountDown();
  };

  app.controller("maincontroller", maincontroller);
}());