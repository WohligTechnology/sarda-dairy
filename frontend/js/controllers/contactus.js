 myApp.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/contactus.html");
     TemplateService.title = "ContactUs"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })