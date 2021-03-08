<div class="kalender">
    <div class="k_day">
        <div class="k_day_head">
            <div>28</div>
            <div>Donnerstag</div>
        </div>

        <div class="k_day_content">
            <div class="k_day_content_row">
                <span>
                    Arbeitszeit 
                </span>
                <span>
                    7:25 Std.
                </span>
            </div>

        </div>

        <div class="k_day_control">
            <button>Details</button>
        </div>
    </div>

    <div class="k_year">
        <button><</button>
        <span>2021</span>
        <button>></button>
    </div>

    <div class="k_month">
        <?php 
        
            foreach($arr_month_short as $month)
            {
                echo "<button>$month</button>";
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
                    if($i % 2 === 0)
                    {
                        echo '<button class="marker">' . $i . '</button>';
                    }
                    else
                    {
                        echo "<button>" . $i . '</button>';
                    }
                }
        
            ?>
        </div>

    </div>
</div>