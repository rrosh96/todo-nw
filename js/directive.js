angular.module('todoApp').directive("todoDirective",function() {
    return {
        restrict : 'A',
        templateUrl : "views/view.html",
        scope: {
            tasks: '=',
            viewAllTasks: '&'
        },
        controller: function ($scope, todoService) {
//            console.log($scope.viewAllTasks)
            $scope.my_task = null;
            $scope.showDesp = false;

            $scope.removeTask = function(index){
                $scope.showDesp = false;
//                $scope.tasks.splice(index, 1);
                todoService.removeTask(index).then(function(){
                    $scope.viewAllTasks();
                });
            };

            $scope.viewTask = function(task){
                $scope.my_task = task;
                $scope.showDesp = true;
            };
        }
    }
});
