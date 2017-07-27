angular.module('myApp').directive('myDirect', function(){
  return {
    restrict: 'E',
    templateUrl: './directives/photo.html',
    scope: {
      ourPhoto: '='
    },
    controller: function($scope, mySrvc){
      $scope.test='http://imoviequotes.com/wp-content/uploads/2014/10/2-Dr.-No-quotes.gif';
                   http://imoviequotes.com/wp-content/uploads/2015/02/101-Dr.-No-quotes.gif
    },
    link: function(scope, element, attrs){
    }
  }
})
