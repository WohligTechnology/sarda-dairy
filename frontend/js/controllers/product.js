 myApp.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/product.html");
     TemplateService.title = "Product"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })