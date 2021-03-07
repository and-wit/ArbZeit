<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$test = array(
    "text" => "Hallo",
    "eintraege" => array(
        1 => "Termin 1",
        2 => "Termin 2",
        3 => "Termin 3"
    )
);

// echo json_encode("Hallo");
echo json_encode($test);

?>