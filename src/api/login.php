<?php

    //判断用户名是否存在
	include 'connect.php';
	
	$username = isset($_POST['username']) ? $_POST['username'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 
	
     //sql语句查询
	   $sql = "select * from login where username='$username' and password='$password'";
       
	// 执行sql语句
		$result = $conn->query($sql);
		

		if($result->num_rows>0){
			echo "yes";
		}else{
			echo 'no';
	  }
	  
	
?>