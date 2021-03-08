<?php

    $arr_weekday = array(
        "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"
    );

    $arr_weekdays_short = array(
        "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"
    );

    $arr_month = array(
        "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
    );

    $arr_month_short = array(
        "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
    );

    function getData_Date(){

        $initDate = getDate();

        if($initDate["mon"-1] < 10){$initDate["mon"] = "0" . ($initDate["mon"]-1);}
        if($initDate["mday"] < 10){$initDate["mday"] = "0" . $initDate["mday"];}

        return $initDate["year"] . "-" .  $initDate["mon"] . "-" . $initDate["mday"];

    }

    
?>