<div id="kalender" class="kalender">
    <div class="k_day">
        <div class="k_day_head">
            <div id="k_day_head_month"></div>
            <div id="k_day_head_day"></div>
            <div id="k_day_head_weekday"></div>
        </div>

        <div class="k_day_content">
            <div class="k_day_content_row">
                <span>
                    Tag 
                </span>
                <span id="k_day_content_row_time_day">
                    7:25 Std.
                </span>
            </div>
            <div class="k_day_content_row">
                <span>
                    Woche
                </span>
                <span id="k_day_content_row_time_week">
                    27:25 Std.
                </span>
            </div>
            <div class="k_day_content_row">
                <span>
                    Monat
                </span>
                <span id="k_day_content_row_time_month">
                    127:25 Std.
                </span>
            </div>

        </div>

        <div class="k_day_control">
            <button id="k_day_control_details_button">Details</button>
        </div>
    </div>

    <div class="k_year">
        <button id="k_year_prev_button"><</button>
        <span id="k_year_text">2021</span>
        <button id="k_year_next_button">></button>
    </div>

    <div class="k_month">
        <?php 
        
            for($i = 0; $i < 12; $i++)
            {
                echo '<button class="" data-month="' . $i . '">' . $arr_month_short[$i] . "</button>";
            }
            
        
        ?>
    </div>

    <div class="k_table">

        <div class="table_head">
            <?php 
            
                foreach($arr_weekdays_short as $weekdays_short)
                {
                    echo "<span>$weekdays_short</span>";
                }
        
            ?>
        </div>

        <div class="table_days">
            <?php 
                
                for($i = 0; $i < 42; $i++)
                {
                    // echo '<button data-day="'. $i .'" class="marker">' . $i . '</button>';
                    echo '<button class="" data-day="0" >0</button>';
                }
        
            ?>
        </div>

    </div>
</div>