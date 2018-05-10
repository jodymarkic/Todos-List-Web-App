//Check of Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//click on x to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) { //checking for enter keypress
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
})