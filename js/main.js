// $(document).ready(function(){
// 	console.log("Hello Ajax.");
// 	$("#getMessage").on("click", function(){
// 			console.log("Btn clicked.");
// 			// $(".message").text("I've set a new message today.");
// 			// $(".message").html("Here is the message.");
// 			$.getJSON("/api/json/cats.json", function(json){
// 				$(".message").html(JSON.stringify(json));
// 			});

// 	});

// });

//convert json to data

$(document).ready(function(){
	console.log("Hello Ajax.");
	$("#getMessage").on("click", function(){
			console.log("Btn clicked.");
			$.getJSON("/api/json/cats.json", function(json){
				var html = "";
				//loop through the json data
				json.forEach(function(val) {
          			var keys = Object.keys(val);
          			html += "<div class = 'cat'>";
          			keys.forEach(function(key) {
          				html += "<b>" + key + "</b>: " + val[key] + "<br>";
          			});
          			html += "</div><br>";
        		});
        		$(".message").html(html);
			});//getJSON

	});

});