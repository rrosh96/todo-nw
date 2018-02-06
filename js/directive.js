angular.module('todoApp').directive("todoDirective",function() {
    return {
        restrict : 'A',
        templateUrl : "views/view.html",
        controller: function ($scope, todoService) {
            $scope.tasks = todoService.getTasks();
            $scope.my_task = null;
            $scope.showDesp = false;

            $scope.removeTask = function(index){
                $scope.showDesp = false;
                $scope.tasks.splice(index, 1);
            };

            $scope.viewTask = function(task){
                $scope.my_task = task;
                $scope.showDesp = true;
            };
        }
    }
});
