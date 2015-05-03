/**
 * Created by jtonic on 01.05.2015.
 */
var model = {email: "antonel.pazargic@gmail.com", password: "secret", remember_me: false};

angular.module("todoApp", [])
    .constant('baseUrl', "http://localhost:3000/users")
    .controller("todoController", function($scope, $http, baseUrl) {
    $scope.todo = model;

    $scope.submit = function () {
        console.log('HTTP POST: ' + JSON.stringify($scope.todo));
        $http.post(baseUrl, $scope.todo)
    }
});
