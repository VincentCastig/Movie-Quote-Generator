angular.module('myApp').directive("showTime", function(){
  return {
      restrict: 'E',
      scope: {
        sendTweet: '&'
      }
  }
});
