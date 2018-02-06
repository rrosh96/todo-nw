angular.module('todoApp').service('todoService', function(){
    var tasks = [];

    this.addTask = function (task) {
        tasks.push ({"name": task.name, "desp": task.description, "status": task.done})
    };

    this.getTasks = function(){
        return tasks;
    };

})