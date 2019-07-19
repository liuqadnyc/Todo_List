// Check Off Specific Todos By Clicking
// $("li").on("click", function(){			//it can not work, cuz it didn't use delegated-events
// 	$(this).toggleClass("completed");	
// });
$("ul").on("click", "li", function(){	//use click() only adds listeners for existing elements
	$(this).toggleClass("completed");	//but on("click") will add listeners for all potential future elements 
});										//ul delegate the event to all li



//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();		//this refers to the parent of span
	});
	event.stopPropagation();	//avoid fire li, ul, div, body and so on...
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");	//clear the text
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>") //"far fa-trash-alt"->'far fa-trash-alt'
	}
});

$("#addbtn").click(function(){
	$("input[type='text']").fadeToggle();
});