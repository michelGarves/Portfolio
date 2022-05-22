$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}

    	})          
    });


});

function validateForm()                                    
{ 
    var name = document.getElementById("name");               
    var email = document.getElementById("email");    
    var message =  document.getElementById("message");   
    var verif = true;
    if (name.value == "")                                  
    { 
        verif = false; 
    }
       
    if (email.value == "")                                   
    { 
        
        verif = false; 
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
       
        verif = false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
       
        verif = false; 
    } 
   
    if (message.value == "")                           
    {
        
        verif = false; 
    }
   
	if(verif){
		document.forms["form_email"].submit();
	}else{
		document.getElementById('errormsg').innerHTML="Échec lors de l'envoi du mail";  
	}
}

