<?php
include_once ('db_connection.php');

$sql = "SELECT* FROM texttable order by RAND() LIMIT 1";

$result = mysqli_query($conn,$sql);
$json_array= array();
while($row = mysqli_fetch_assoc($result)){
  $json_array[]=$row;
}

echo json_encode($json_array);
?>
