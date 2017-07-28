angular.module('myApp',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: "../views/home.html"
            })
            .state('action',{
                url:'/action',

                templateUrl: "../views/action.html"
            })
            .state('comedy',{
                url:'/comedy',
                templateUrl: "../views/comedy.html"

            })
            .state('drama',{
                url:'/drama',
                templateUrl: "../views/drama.html"
            })
            .state('romance',{
                url:'/romance',
                templateUrl: "../views/romance.html"

            })
            .state('fantasy',{
                url:'/fantasy',
                templateUrl: "../views/fantasy.html"
            })
            .state('thriller',{
                url:'/thriller',
                templateUrl: "../views/thriller.html"
            })
            ;


    });
