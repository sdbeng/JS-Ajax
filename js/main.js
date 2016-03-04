$(document).ready(function(){
	console.log("Hello Ajax.");
	$("#getMessage").on("click", function(){
			console.log("Btn clicked.");
			// $(".message").text("I've set a new message today.");
			// $(".message").html("Here is the message.");
			$.getJSON("/api/json/cats.json", function(json){
				$(".message").html(JSON.stringify(json));
			});

	});

});