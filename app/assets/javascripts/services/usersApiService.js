var api = angular.module('UsersApiFactory', []);

api.factory('UsersApi', ['$http', function ($http) {

  var usersApiFactoryInterface = {};
  var baseUrl = '/api/users/';

  usersApiFactoryInterface.getAll = function () {
    return $http.get(baseUrl);
  }

  usersApiFactoryInterface.createUser = function (newUser) {
    var payload = {user : newUser };
    return $http.post(baseUrl, payload);
  }

  usersApiFactoryInterface.delete = function (id) {
    return $http.delete(baseUrl + id);
  }

  return usersApiFactoryInterface;
}]);
