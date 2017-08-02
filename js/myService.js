angular.module('myApp').service('mySrvc', function($http){
var self = this;

this.getQuotes = function(genre){
  return $http.get('./quotes.JSON').then(function(res){

    self.randomQuote = ''

      var newQuote = []
       res.data.forEach(function(val){
         if(val.genre == genre){

          newQuote.push(val)
          }
      })
      var randomQuote = newQuote[Math.floor(Math.random() * newQuote.length)]
        var randomMovie = randomQuote.image

        self.randomQuote = randomQuote.movie
        function strip(){
          randomMovie = randomMovie.split(' ')
          randomMovie.forEach(function(arr, index, array){
          if(arr[arr.length-1] == '"'){
            array.splice(0,index + 1)
            }
            return arr
          })
          return randomMovie.join('-')
        }
          console.log( randomQuote.movie)
        self.tweet = 'https://twitter.com/intent/tweet?text=' + randomQuote.movie

        return randomMovie;

    })
  }



})
