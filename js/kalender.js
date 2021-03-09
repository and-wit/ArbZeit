class Kalender{
    
    arr_monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    arr_monate = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

    arr_wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    arr_wochentage_kurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

    frame = null;
    
    year = null;
    month = null;
    date = null;

    weekday_number = null;
    weekday_text = null;

    table_days_prev_offset = null;
    table_days_after_offset = null;
    table_days_count = null;

    view = null;
    
    static init(frame = "")
    {
        if(frame === "")
        {
            return false;
        }
        window.kalender = new Kalender(frame);        
    }

    constructor(frame = "")
    {
        if(frame == "")
        {
            console.log("Framename not set");
            return;
        }
        
        if(document.getElementById(frame) === null)
        {
            console.log("Frame not found");    
            return;
        }

        this.frame = document.getElementById(frame);
        this.view = new KalenderView(this.frame);

        this.setDateInfos();
        // this.view.render();
        this.setKalenderHandler();
        
    }

    setKalenderHandler()
    {
        document.getElementById("k_day_control_details_button").addEventListener("click", function(){
            window.kalender.clickDetails();
        },true);

        document.getElementById("k_year_prev_button").addEventListener("click", function(){
            window.kalender.clickPrevYear();
        },true);

        document.getElementById("k_year_next_button").addEventListener("click", function(){
            window.kalender.clickNextYear();
        },true);

        document.querySelector(".k_month").addEventListener("click", function(ev){
            window.kalender.clickMonth(ev.target.dataset.month);
        },true);

        document.querySelector(".table_days").addEventListener("click", function(ev){
            if(ev.target.dataset.day != "0")
            {
                console.log("Hallo");
                window.kalender.click(ev.target.dataset.day);
            }
            
        },true);
    }

    clickDetails()
    {
        console.log("Hallo");
    }

    clickNextYear()
    {
        this.year++;
        this.view.render();
    }

    clickPrevYear()
    {
        this.year--;
        this.view.render();
    }

    clickMonth(month)
    {
        this.month = parseInt(month);
        this.view.render();
    }

    clickDay(day)
    {

    }

    setDateInfos(date = new Date())
    {
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date.getDate();

        this.weekday_number = function(){
            return (date.getDay() + 6) % 7;
        };

        this.weekday_text = function(){
            return this.arr_wochentage[this.weekday_number()];
        };
    }

    getDateInfos()
    {
        let info = {
            "year" : this.year,
            "month" : this.month,
            "date" : this.date,

            "weekday_number" : this.weekday_number(),
            "weekday_text" : this.weekday_text(),

        };

        return info;
    }


}