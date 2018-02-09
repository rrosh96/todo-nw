var todoApp = angular.module('todoApp', [
  'ngRoute'
]);

// var todoNew = angular.module('todoNew', ['todoApp'])

// var low = require('lowdb');
// var db = low('db.json');

 //require('nw.gui').Window.get().showDevTools()
 debugger

todoApp.config(['$routeProvider',

function($routeProvider) {
  $routeProvider.
    when('/todo', {
      templateUrl: 'views/todo.html',
      controller: 'todoCtrl'
    })
    .when('/taskname',{
      templateUrl: 'views/taskName.html',
      controller: 'todoCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
