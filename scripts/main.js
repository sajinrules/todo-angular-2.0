function todoComponent(){
	this.todos = [];
	
	this.addTodo = function(todoname) {
		if(todoname.value){
			this.todos.push(todoname.value);
	    	todoname.value = '';
	    	Materialize.showStaggeredList('#staggered-test')
	    	Materialize.toast('todo added !', 4000)
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
  		Materialize.showStaggeredList('#staggered-test')
	    Materialize.toast('todo deleted !', 4000)
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
		$('.tooltipped').tooltip({delay: 50});
	angular.bootstrap(todoComponent);
	angular.bootstrap(navComponent);
});
