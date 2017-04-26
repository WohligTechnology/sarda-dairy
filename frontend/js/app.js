// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('procurement', {
            url: "/procurement",
            templateUrl: tempateURL,
            controller: 'ProcurementCtrl'
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: tempateURL,
            controller: 'ContactUsCtrl'
        })
        .state('news-and-event', {
            url: "/news-and-event",
            templateUrl: tempateURL,
            controller: 'NewsAndEventCtrl'
        })
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('product', {
            url: "/product",
            templateUrl: tempateURL,
            controller: 'ProductCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('csr', {
            url: "/csr",
            templateUrl: tempateURL,
            controller: 'CsrCtrl'
        })
        .state('team', {
            url: "/team",
            templateUrl: tempateURL,
            controller: 'TeamCtrl'
        })
        .state('overview', {
            url: "/overview",
            templateUrl: tempateURL,
            controller: 'OverviewCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});