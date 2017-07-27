angular.module('myApp').controller('mainCtrl', function($scope, mySrvc){
$scope.test = mySrvc.newImage


$scope.newImage = mySrvc.newImage
  console.log($scope.newImage)



});
