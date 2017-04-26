 myApp.controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
     $scope.template = TemplateService.getHTML("content/aboutus.html");
     TemplateService.title = "AboutUs"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.myProduct = [{
             img: 'img/aboutus/1.png',
             text: 'Milk'

         },
         {
             img: 'img/aboutus/2.png',
             text: 'Dahi'

         }, {
             img: 'img/aboutus/3.png',
             text: 'ULT Milk'

         }, {
             img: 'img/aboutus/4.png',
             text: 'Lassi'

         }, {
             img: 'img/aboutus/4.png',
             text: 'Milk'

         }, {
             img: 'img/aboutus/3.png',
             text: 'Milk'

         }
     ];
     $scope.newEvent = [
         '../img/aboutus/1.png',
         '../img/aboutus/2.png',
         '../img/aboutus/3.png'

     ];
     $scope.formSubmitted = false;
     $scope.submitForm = function (data) {
         console.log(data);
         $scope.formSubmitted = true;
     };
 })