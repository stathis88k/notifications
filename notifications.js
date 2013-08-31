
function checkMessage(){
//This if check is required to take care of the browser compatibility problem
if (window.XMLHttpRequest) 
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xmlhttp.onreadystatechange=function() //when the request is submitted...
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200 //...and everything is ok...
    {
    	if(xmlhttp.responseText>0){ // if the response text is greater than 0
		    // change the title of the page. If the request returns for ex. 1
			//The title of the page should become like this "(1) My Social Network - Welcome"
    		document.title="("+xmlhttp.responseText+")"+"My Social Network - Welcome"; 
			//if you want also a notification inside the content of the page you can also do it
			//Here is an example of changing the content of a div 
    		document.getElementById('checkMsg').innerHTML="<b>" + xmlhttp.responseText+" Notifications</b>";
    	}
    	else // else if the rsponse is not grater than 0
			//The title of the page stays to default
		    document.title="My Social Network - Welcome";
		    //The div takes the message "No notifications" 
    		document.getElementById('checkMsg').innerHTML="No notifications";
    }
  }
//and finally send the request to the php page 
xmlhttp.open("GET","checkMessage.php?user_id="+"some_user",true); 
xmlhttp.send();
}



