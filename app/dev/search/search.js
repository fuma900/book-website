app.controller('searchCtrl', ['$scope', '$stateParams', 'GoogleBooks',
  function ($scope, $stateParams, GoogleBooks) {
    if ($stateParams.q){
      $scope.q = $stateParams.q;
    } else { $scope.q = "Harry Potter"}
    GoogleBooks.Search($scope.q).success(function (response) {
      $scope.books = response.items;
    })
    .error(function (error) {
      console.warn(error);
    });
  }
]);
