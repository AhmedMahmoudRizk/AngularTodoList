"use strict";
var app = angular.module('TODOListApp', ["ng", "ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'login.html',
            controller: 'loginController'

        })
        .when("/register", {
            templateUrl: "register.html",
            controller: 'registerController'
        }).when("/main1", {
            templateUrl: "main1.html",
            controller: 'mainController'
        }).when('/addtask', {
            templateUrl: '/todoAddTask.html',
            controller: 'mainController'
        })
        .when('/:id', {
            templateUrl: '/todoDetails.html',
            controller: 'TodoDetailCtrl'
        });
});

app.run(function ($rootScope) {
    $rootScope.num = 5;
    $rootScope.todos = [
        { id: "1", title: "Task1", desc: "Description 1", category: "category 1", subCategory: "subCategory 1" },
        { id: "2", title: "Task2", desc: "Description 2", category: "category 2", subCategory: "subCategory 2" },
        { id: "3", title: "Task3", desc: "Description 3", category: "category 3", subCategory: "subCategory 3" },
        { id: "4", title: "Task4", desc: "Description 4", category: "category 4", subCategory: "subCategory 4" }
    ];
});

// app.factory('Todos', function () {
//     return [
//         { name: 'AngularJS Directives', completed: true, note: 'add notes...' },
//         { name: 'Data binding', completed: true, note: 'add notes...' },
//         { name: '$scope', completed: true, note: 'add notes...' },
//         { name: 'Controllers and Modules', completed: true, note: 'add notes...' },
//         { name: 'Templates and routes', completed: true, note: 'add notes...' },
//         { name: 'Filters and Services', completed: false, note: 'add notes...' },
//         { name: 'Get started with Node/ExpressJS', completed: false, note: 'add notes...' },
//         { name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
//         { name: 'Be awesome!', completed: false, note: 'add notes...' },
//     ];
// })
app.controller('loginController', function ($scope, $window, $location) {
    $scope.authenticate = function () {
        $window.location.href = '/#!/main1';
    }
});
app.controller('registerController', function ($scope) {

});
app.controller('mainController', function ($scope, $window, $location) {

    // $scope.todos = [
    //     { id: "1", title: "Task1", desc: "Description 1", category: "category 1", subCategory: "subCategory 1" },
    //     { title: "Task2", desc: "Description 2", category: "category 2", subCategory: "subCategory 2" },
    //     { title: "Task3", desc: "Description 3", category: "category 3", subCategory: "subCategory 3" },
    //     { title: "Task4", desc: "Description 4", category: "category 4", subCategory: "subCategory 4" }
    // ];
    $scope.addItem = function (title, complete, desc, category, subCategory) {
        $scope.tod = { id: $scope.num, title: title, desc: desc, category: category, subCategory: subCategory };
        console.log($scope.todos);
        $scope.num++;
        $scope.todos.push($scope.tod);
        console.log($scope.todos);
        $window.location.href = '/#!/main1';
    };

});
app.controller('TodoDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log($routeParams.id);
    console.log($scope.todos[$routeParams.id]);
    $scope.todo = $scope.todos[$routeParams.id];
    $scope.deleteItem = function () {
        $scope.todo.splice($routeParams.id, 1);
    }
    $scope.editTask = function () {
        console.log($scope.todo);
        $scope.todos[$routeParams.id] = $scope.todo;
    }
}])

