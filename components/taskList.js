(function() {
  // var taskList = {
  //   bindings: {
  //     todoList: "<"
  //   },
    templateUrl: "partials/taskList.html",
    controller: function(TaskService) {
      var $ctrl = this;
      $ctrol.todoList = function(task);
    controller: function () {
      var $ctrl = this;
      $ctrl.removeToDo = function(task) {
      $ctrl.todoList.splice(task, 1);
      }
    }
  // }
  angular.module("app")
    .component("taskList", taskList)
})();
