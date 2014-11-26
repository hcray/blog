$(document).ready(function(){
	var curLocation = window.location.href;
	if("http://daoliuhe.com/" == curLocation){
		$("#main").addClass("active");
		
	}else if(curLocation.indexOf("categorys.html") > 0 ){
		$("#category").addClass("active");
	
	}else if(curLocation.indexOf("photo.html") > 0 ){
		$("#photo").addClass("active");
		
	}else if(curLocation.indexOf("message.html") > 0 ){
		$("#message").addClass("active");

	}else if(curLocation.indexOf("about.html") > 0 ){
		$("#about").addClass("active");
		
	}
});