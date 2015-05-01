/**
    * Created by jtonic on 01.05.2015.
    */
var model = {email: "antonel.pazargic@gmail.com", password: "secret"};

var todoApp = angular.module("todoApp", []);
todoApp.controller("todoController", function($scope) {
    $scope.todo = model;

    $scope.submit = function () {
        console.log('Instead of static model we have to get the data through REST service');
        console.log(model.email);
        console.log(model.password);
    }

});
