﻿<?php

//header('Content-Type:text/plain;charset=utf-8');

 if(!empty($_POST)){
    $username=$_POST['username'];  
    $email=$_POST['email'];
    $detail=$_POST['detail'];
 }


$con = mysql_connect("localhost","XXXX","XXXXX");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_query("set names utf-8");


// Create table in my_db database
// 


mysql_select_db("cqsm", $con);
$sql = "INSERT INTO `XXXX`.`XXXXX` 
(`username`,`email` ,`detail`)
VALUES
('$username','$email','$detail')";
mysql_query($sql,$con);

mysql_close($con);

echo 
'<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        alert("发送成功");
     		window.location.href=\'http://movie.simmzl.cn/view.html#LastPage\';
    </script>
</head>
<body>
		
</body>
</html>';

?>