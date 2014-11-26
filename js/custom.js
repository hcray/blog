$(document).ready(function(){
	var curLocation = window.location.href;
	if("http://daoliuhe.com" == curLocation){
		$("#main").addClass("active");
		
	}else if("http://daoliuhe.com/categorys/categorys.html" == curLocation){
		$("#category").addClass("active");
	
	}else if("http://daoliuhe.com/categorys/phote.html" == curLocation){
			$("#phote").addClass("active");
		
	}else if("http://daoliuhe.com/categorys/message.html" == curLocation){
		$("#message").addClass("active");

	}else if("http://daoliuhe.com/categorys/about.html" == curLocation){
		$("#about").addClass("active");
		
	}
});