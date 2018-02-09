angular.module('todoApp').controller('IndexCtrl', ['$scope', '$routeParams', 'todoService', '$location',
  function($scope, $routeParams, todoService, $location) {
      $scope.tasks = {}

    todoService.getTasks().then(function (data) {
        $scope.tasks.data = data;
    });
      
//    $scope.tasks = todoService.getTasks();
      
    $scope.addTask = function (task) {
      $location.path('/todo');
    };

    $scope.returnToHome = function () {
      $location.path('/');
    }

    $scope.storeTask = function (task) {
      todoService.addTask(task).then(function () {
          $location.path('/');
          $scope.viewAllTasks();
      });
    };

    $scope.viewAllTasks = function () {
        todoService.getTasks().then(function (data) {
            $scope.tasks.data = data;
        });
    }
  }
])

.controller ('todoCtrl', function () {

})
