angular.module('timeApp').directive("showTime", function(){
  return {
      restrict: 'E',
      scope: {
        sendTweet: '&'
      }
  }
});
