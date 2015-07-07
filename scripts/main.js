function todoComponent(){
	this.todos = [];
	
	this.addTodo = function(todoname) {
		if(todoname.value){
			this.todos.push(todoname.value);
	    	todoname.value = '';	
		}
	};

	this.doneTyping = function($event) {
		/*	to control ENTER key stroke 	*/
		if($event.which === 13) {
			this.addTodo($event.target);
		}
  	}

  	this.delete = function(i){
  		this.todos.splice(i,1);
  	}


}

function navComponent(){
	this.name = "Sajin"
}

navComponent.annotations	=	[
	new angular.ComponentAnnotation({
		selector: 'my-nav'
  	}),
	new angular.ViewAnnotation({
    	templateUrl:'templates/navbar.html'
  	})
];

todoComponent.annotations	=	[
	new angular.ComponentAnnotation({
		selector: 'my-app'
  	}),
	new angular.ViewAnnotation({
    	templateUrl:'templates/todo.html',
    	directives: [angular.NgFor, angular.NgIf]
  	})
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(todoComponent);
	angular.bootstrap(navComponent);
});
