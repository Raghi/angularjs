(function() {

  var app = angular.module("githubviewer");


  var maincontroller = function($scope, $interval, $location) {

    $scope.search = function(username) {
      if (countdowninterval)
      {
        $interval.cancel(countdowninterval);
      }
      $location.path("/user/"+username);
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
    $scope.countdown = 5;
    startCountDown();
  };

  app.controller("maincontroller", maincontroller);
}());