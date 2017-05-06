 myApp.controller('OverviewCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/overview.html");
     TemplateService.title = "Overview"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.mySlides = [
         'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
         'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
         'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
         'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
     ];
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })