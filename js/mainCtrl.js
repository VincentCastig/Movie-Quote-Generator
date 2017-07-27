angular.module('myApp').controller('mainCtrl', function($scope, mySrvc){



$scope.newImage = mySrvc.newImage
  console.log($scope.newImage)



});
