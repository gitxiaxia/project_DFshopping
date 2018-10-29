<?php

    //判断用户名是否存在
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : null; 

	
     //sql语句查询
	   $sql = "select * from login where username='$username'";
       
	// 执行sql语句
		$result = $conn->query($sql);
		

		if($result->num_rows>0){
			echo "no";
		}else{
			echo 'yes';
	  }
	  
	
?>