'use strict';
var googleBooks = angular.module('googleBooks', []);

googleBooks.factory('GoogleBooks', [ '$http',
  function ($http) {
    // SAMPLE RESPONSE FROM GOOGLE BOOKS A
    return {
      Search: function (q) {
        return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + q + '&maxResults=40');
      } // end return
    }
  }
]);
