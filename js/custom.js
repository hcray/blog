$(document).ready(function(){
	var curLocation = window.location.href;
	if("http://daoliuhe.com" == curLocation){
		$("#main").addClass("active");
		
	}else if("http://daoliuhe.com/pages/categorys.html" == curLocation){
		$("#category").addClass("active");
	
	}else if("http://daoliuhe.com/pages/phote.html" == curLocation){
			$("#phote").addClass("active");
		
	}else if("http://daoliuhe.com/pages/message.html" == curLocation){
		$("#message").addClass("active");

	}else if("http://daoliuhe.com/pages/about.html" == curLocation){
		$("#about").addClass("active");
		
	}
});