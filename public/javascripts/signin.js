/**
 * Created by jtonic on 01.05.2015.
 */
var model = {email: "antonel.pazargic@gmail.com", password: "secret"};

angular.module("todoApp", [])
    .constant('baseUrl', "http://localhost:3000/users")
    .controller("todoController", function($scope, $http, baseUrl) {
    $scope.todo = model;

    $scope.submit = function () {
        console.log('HTTP POST: ' + JSON.stringify(model));
        console.log(model.email);
        console.log(model.password);
        $http.post(baseUrl, model)
    }
});
