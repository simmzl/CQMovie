﻿<?php

//header('Content-Type:text/plain;charset=utf-8');

 if(!empty($_POST)){
    $username=$_POST['username'];  
    $email=$_POST['email'];
    $detail=$_POST['detail'];
 }


$con = mysql_connect("localhost","cqsm","hqugxy008");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_query("set names utf-8");


// Create table in my_db database
// 


mysql_select_db("cqsm", $con);
$sql = "INSERT INTO `cqsm`.`cqsmg` 
(`username`,`email` ,`detail`)
VALUES
('$username','$email','$detail')";
mysql_query($sql,$con);

mysql_close($con);

echo $username.'  ';
echo $email.'  ';
echo $detail.'  ';
echo 'OK!';

?>