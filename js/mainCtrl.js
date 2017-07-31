angular.module('myApp').controller('mainCtrl', function($scope, mySrvc){

  $scope.index='http://s2.quickmeme.com/img/72/725fe4606d92d9703efef5c820e0131380fc04dcfaa2407b8b7968f8738b5d67.jpg'

   $scope.newImage = function(img){


    mySrvc.getQuotes(img).then(function(response){
      $scope.test = response
      $scope.tweet = mySrvc.tweet
    })


}





});
