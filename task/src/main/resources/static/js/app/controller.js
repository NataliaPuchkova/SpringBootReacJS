app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});

app.controller('controller', ["$scope", "$http", function($scope, $http) {
 $scope.products = ["Milk", "Bread", "Cheese"];
 $http.get("\\task\\getAll").then(function (response) {
      console.log(response.data);
      $scope.myData = response.data;
  });

}]);

