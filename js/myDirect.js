angular.module('myApp').directive('myDirect', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/photo.html',
    scope: {
      ourPhoto: '='
    }
  }

})
