/**
 * Created by jtonic on 03.05.2015.
 */
var navbar_model = {curr_item: "home"};

var main_app = angular.module("main_app", []);
main_app.controller("main_ctrl", function ($scope) {
    $scope.navbar = navbar_model;
});

