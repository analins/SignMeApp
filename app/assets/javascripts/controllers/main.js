var ctrl = angular.module('MainController', []);

ctrl.controller('MainController', ['$scope', '$timeout', 'UsersApi', function ($scope, $timeout, UsersApi) {

  $scope.users = [];
  $scope.newUser = {};

  $scope.signedUpAnimate = function(){
      $scope.signedup = true;
      $timeout(function(){
        $scope.newUser = {};
        $scope.signedup = false;
      }, 2000);
    }

  $scope.getAllUsers = function () {
    UsersApi.getAll().then(function (response) {
      $scope.users = response.data.users;
    });
  }

  $scope.createNewUser = function () {
    UsersApi.createUser($scope.newUser).then(function (response) {
      $scope.users.push(response.data);
      $scope.getAllUsers();
      $scope.signedUpAnimate();

    });
  }

  // $scope.editUser = function (id) {
  //   UsersApi.get(id).then(function (response) {
  //     dbUser = response.data;
  //     $scope.getAllUsers();
  //   });
  // }

  $scope.deleteUser = function (id) {
    UsersApi.delete(id).then(function (response) {
      dbUser = response.data;
      $scope.getAllUsers();
    });
  }

  $scope.getAllUsers();

}]);
