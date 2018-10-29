<?php
	 //判断用户名是否存在
	include 'connect.php';
	
	
	$username = isset($_POST['username']) ? $_POST['username'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 


	
	   //sql语句写入
   $sql= "insert into login ( username, password) values('$username','$password')";
	  
     
	// 执行sql语句
	$true = $conn->query($sql);
//	
//	
//		
   if($true){
	  	    echo "succeed";
	    }
    if(!$true){
     	echo "defeated";		
    }
  
?>