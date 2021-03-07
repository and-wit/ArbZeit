<?php 


?>

<div class="kalender_frame">

    <span id="test_text"></span>

    <div class="links">
        <div class="menu">
            &#9776;
        </div>

        <div class="tag">
            <span class="tag_nummer"></span>
            <span class="tag_wochentag"></span>
        </div>

        <div class="ubersicht">

            <div class="ubersicht_zeile">
                <div>Arbeitszeiten</div>            
                <div>9,20 Std.</div>
            </div>
        
        </div>


        <div class="befehle">
            <div class="befehl_zeile detail">
                <span>Details</span>
                <button class="befehl_btn">&telrec;</button>
            </div>

        </div>

        <div class="befehle">
            <div class="befehl_zeile new">
                <span>neuer Eintrag</span>
                <button class="befehl_btn">+</button>
            </div>
        </div>

        

    </div>
    <div class="rechts">

        <div class="jahr_auswahl">
            <button class="jahr_minus">&#10094;</button>
            <span class="jahr_zahl"></span>
            <button class="jahr_plus">&#10095;</button>
        </div>

        <div class="monat_auswahl">

            <?php
                $index = 1;
                foreach ($arr_month_short as $value) {

                    echo "<button class='monat' data-value='";
                    echo $index;
                    echo "' data-role='monat'>";
                    echo $value;
                    echo "</button>";

                    $index++;
                }  
            ?>

        </div>

        <div class="woche_head">
            <?php

                foreach ($arr_weekdays_short as $value) {
                    echo "<span>$value</span>";
                }

            ?>
        </div>

        <div class="tabelle_tage">

            <?php

                for($i = 0; $i < 42; $i++)
                {
                    echo '<div class="tabelle_einzel_tag" data-role="empty">' . "\n";
                    echo '  <div class="tabelle_tag_text" data-day="01" data-role="tag"></div>' . "\n";
                    echo '</div>' . "\n";
                }
            ?>
            
        </div>

    </div>

</div>