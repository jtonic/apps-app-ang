/**
 * Created by jtonic on 03.05.2015.
 */
var navbar_model = {curr_item: "home"};

var main_app = angular.module("main_app", []);
main_app.controller("main_ctrl", function ($scope) {
    $scope.navbar = navbar_model;
});

var app = angular.module("apps-app-ang", [ "kendo.directives" ]).controller("app-controller", function ($scope) {
    $scope.selectOptions = {
        placeholder: "Select products...",
        dataValueField: "id",
        dataTextField: "name",
        dataSource: {
            transport: {
                read: {
                    url: "users/all",
                    type: "get",
                    dataType: "json"
                }
            }
        }
    };
    $scope.selectedIds = [
        {id: "1"},
        {id: "2"}
    ];
});

$(function () {
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "users/all",
                type: "get",
                dataType: "json"
            }
        }
    });

    $("#dropdownlist").kendoDropDownList({
        dataSource: dataSource,
        filer: "contains",
        index: 0,
        dataValueField: "id",
        dataTextField: "name"
    });
});

