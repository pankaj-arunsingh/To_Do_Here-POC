"use strict";

var App = angular.module("todo", ["LocalStorageModule"]);
App.controller("TodoCtrl", function ($scope, localStorageService) {
	$scope.init = function () {
		if (!localStorageService.get("todoList")) {
			$scope.model = [
				{
					name: "Primary", list: [
						{ taskName: "Create an Angular-js TodoList", isDone: false },
						{ taskName: "Understanding Angular-js Directives", isDone: true }
					]
				},
				{
					name: "Secondary", list: [
						{ taskName: "Build an open-source website builder", isDone: false },
						{ taskName: "BUild an Email Builder", isDone: false }
					]
				}
			];
		}else{
			$scope.model = localStorageService.get("todoList");
		}
		$scope.show = "All";
		$scope.currentShow = 0;
	};

	$scope.addTodo = function  () {
		/*Should prepend to array*/
alert("todo");
		$scope.model[$scope.currentShow].list.splice(0, 0, {taskName: $scope.newTodo, isDone: false });
		/*Reset the Field*/
		$scope.newTodo = "";
	};

	$scope.deleteTodo = function  (index) {
		$scope.model[$scope.currentShow].list.splice(index, 1);
	};

	$scope.todoSortable = {
		containment: "parent",
		cursor: "move",
		tolerance: "pointer"
	};

	

	/* Filter Function for All | Incomplete | Complete */
	$scope.showFn = function  (todo) {
		if ($scope.show === "All") {
			return true;
		}else if(todo.isDone && $scope.show === "Complete"){
			return true;
		}else if(!todo.isDone && $scope.show === "Incomplete"){
			return true;
		}else{
			return false;
		}
	};

	$scope.$watch("model",function  (newVal,oldVal) {
		if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
			localStorageService.add("todoList",angular.toJson(newVal));
		}
	},true);

});
/* ------ Menu Controllers  -------- */
App.controller('menuBar', function($scope) {
    $scope.myVar = false;
    $scope.menuOpen = '';
    $scope.menuState = "is-closed";
    $scope.toggle = function() {
        if ($scope.myVar == true) {
            $scope.menuState = "is-closed";
            $scope.menuOpen = '';
      } else {
          $scope.menuOpen = 'toggled';
          $scope.menuState = "is-open";
      }
    $scope.myVar = !$scope.myVar;
    };
});

App.controller("loginCtrl",function($scope){
$scope.login=true;
$scope.register=false;
var userRecord= JSON.parse(localStorage.userData || "null") || [];
$scope.loginClick=function(){
var flag=0;
var userName=document.getElementById("uname").value;
var password=document.getElementById("password").value;
localStorage.usrname=userName;

if ($("#rememberMe").is(' :checked' )){
//save username and password
localStorage.usrname=userName;
localStorage.pass=password
localStorage.chkbx=$("#rememberMe").val();
}
else{
localStorage.usrname="";
localStorage.pass="";
localStorage.chkbx="";
}
for (var j = 0; j < userRecord.length; j++){
  if((userRecord[j].userName==userName)&&(userRecord[j].password==password))
{
flag=1;
localStorage.fullName=userRecord[j].fisrtName+" "+userRecord[j].lastName;
break;
}
}
if(flag==1)
{

window.location="index.html";
return true;
}
else{
alert("You are not a registered user.\n Please get registered by clicking on New user Button !");
return false;
}
};
});

App.controller("registerCtrl",function($scope){

$scope.registerClick=function(){
$scope.login=false;
$scope.register=true;

  var userData = loadData();

        // Wait for user to add new ones
      
      $scope.registerMe=function() {
  emailAddress = document.getElementById("email").value,
  userId = document.getElementById("userName").value,
 pass = document.getElementById("pwd").value,
            data = {
             email: emailAddress,
             userName: userId,
             password: pass,		 	
              id:   +new Date()
            };
        if (userName) {
          userData.push(data);
          saveData();
          
        }

 // Get the responses (if any) or an empty array
      function loadData() {
        return JSON.parse(localStorage.userData || "null") || [];

      }
//Save the new data in local storage
      function saveData() {
        localStorage.userData= JSON.stringify(userData);
      }

};

};
});









