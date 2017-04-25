 myApp.controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/aboutus.html");
     TemplateService.title = "AboutUs"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.mySlides = [
         '../img/aboutus/1.png',
         '../img/aboutus/2.png',
         '../img/aboutus/3.png',
         '../img/aboutus/4.png',
         '../img/aboutus/5.png',
         '../img/aboutus/6.png'

     ];
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })