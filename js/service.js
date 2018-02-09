angular.module('todoApp').service('todoService', function($http, $q){
    var tasks = [];

    this.addTask = function (task) {
        var deferred = $q.defer();
        var sendData = {};
        sendData.value = task;
        $http.post('http://localhost:3000/users/add', sendData).success(function(ack){
            console.log(ack);
            deferred.resolve(ack)
        })
        return deferred.promise;
    };

    this.getTasks = function(){
        var deferred = $q.defer();
        $http.get('http://localhost:3000/users/view').success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
    
    this.removeTask = function(index){
        var deferred = $q.defer();
        var sendIndex = {};
        sendIndex.value = index;
        $http.post('http://localhost:3000/users/remove', sendIndex).success(function (ack) {
            console.log(ack);
            deferred.resolve(ack);
        });
        return deferred.promise;
    }

})