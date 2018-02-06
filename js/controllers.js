angular.module('todoApp').controller('IndexCtrl', ['$scope', '$routeParams', 'todoService', '$location',
  function($scope, $routeParams, todoService, $location) {
    $scope.tasks = todoService.getTasks();

    $scope.addTask = function (task) {
      $location.path('/todo');
    };

    $scope.returnToHome = function () {
      $location.path('/');
    }

    $scope.storeTask = function (task) {
      todoService.addTask(task);
      $scope.tasks = todoService.getTasks();
      $location.path('/');
    }
  }
])

.controller ('todoCtrl', function () {

})
