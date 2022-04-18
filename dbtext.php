<?php
include_once ('db_connection.php');

$sql = 'SELECT* FROM texttable order by RAND() LIMIT 1';

$result = mysqli_query($conn,$sql);
$response= array();
while($row = mysqli_fetch_assoc($result)){
  $response[]=$row;
}

echo json_encode($response);
?>
