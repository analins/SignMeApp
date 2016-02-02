var ctrl = angular.module('MainController', []);

ctrl.controller('MainController', ['$scope', 'UsersApi', function ($scope, UsersApi) {

  $scope.users = [];
  $scope.newUser = {};


  $scope.getAllUsers = function () {
    UsersApi.getAll().then(function (response) {
      $scope.users = response.data.users;
    });
  }

  $scope.createNewUser = function () {
    UsersApi.createUser($scope.newUser).then(function (response) {
      $scope.users.push(response.data);
      $scope.getAllUsers();
      $scope.newUser = {};
    });
  }

  $scope.deleteUser = function (id) {
    UsersApi.delete(id).then(function (response) {
      dbUser = response.data;
      $scope.getAllUsers();
    });
  }

  $scope.getAllUsers();

}]);
