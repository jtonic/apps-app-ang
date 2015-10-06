/**
 * Created by jtonic on 03.05.2015.
 */
var navbar_model = {curr_item: "home"};

var main_app = angular.module("main_app", []);
main_app.controller("main_ctrl", function ($scope) {
    $scope.navbar = navbar_model;
});

$(function () {
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
//                    url: "http://localhost:3000/users/all",
                url: "users/all",
                type: "get",
                dataType: "json"
            }
        }
    });

    $("#dropdownlist").kendoDropDownList({
        /*
         dataSource: [
         {id: "1", name: "Antonel"},
         {id: "2", name: "Irina"}
         ],

         */
        dataSource: dataSource,
        filer: "contains",
        index: 0,
        dataTextField: "name",
        dataValueField: "id"
    });
});

