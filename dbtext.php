<?php

require_once 'db_connection.php';
$result = mysqli_query($conn,"SELECT* FROM texttable order by RAND() LIMIT 1");
$row= mysqli_fetch_array($result);
 ?>
