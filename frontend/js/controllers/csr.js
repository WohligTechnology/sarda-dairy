myApp.controller('CsrCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/csr.html");
    TemplateService.title = "Csr"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.CsrSlide = [{
        img:'../img/csr/1.png',
        },
        {
            img:'../img/csr/2.png',
        },
        {
            img:'../img/csr/3.png',
        },
        {
            img:'../img/csr/1.png', 
        }, {
            img:'../img/csr/2.png',
        }, {
            img:'../img/csr/3.png',
        }
        
        
        

    ];
    $scope.formSubmitted = false;
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
})