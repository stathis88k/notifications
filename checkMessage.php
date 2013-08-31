<?php
		include 'db.php'; //database settings from an external file
		
		$user = $_REQUEST['user']; // take the user id number
		/*The database table has the columns read,user,conversation_number  
			The "read" column takes the values 0 or 1. The 0 value represents that the user has not yet viewed the message.
			The "user" column has the name of the user that has received the message.
			The "conversation_number" it is a random number that represents a conversation between 2 users. This number is always the same for the conversation.
			Each single message is a different row in the databse table. 
		*/
		$get_count_messages = mysql_query("SELECT read, user, conversation_number FROM messages WHERE read='0' AND user='$user' GROUP BY conversation_number");
		$row = mysql_num_rows($get_count_messages); // count how many rows the query returned
			
		echo "$row"; //return the value
?>