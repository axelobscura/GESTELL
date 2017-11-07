var app = angular.module("gestell", ["ngRoute","angularCSS"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "parts/inicio.html",
        controller : "inicio",
        css: "css/inicio.css"
    })
    .when("/intro", {
        templateUrl : "parts/intro.html",
        controller : "intro",
        css: "css/intro.css"
    })
    .when("/pretrade", {
        templateUrl : "parts/pretrade.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});
app.controller("inicio", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("intro", function ($scope) {

});
