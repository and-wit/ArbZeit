class KalenderView{

    frame = null;

    constructor(frame = "")
    {
        this.frame = frame;
    }

    render()
    {
        this.renderYear();
        this.renderMonth();
        this.renderDay();
    }

    renderYear()
    {
        document.getElementById("k_year_text").innerHTML = window.kalender.year;
    }

    renderMonth()
    {
        let el = document.querySelector(".k_month button.active");
        
        if(el)
        {
            el.classList.remove("active");
        }

        let query = 'button[data-month="' + window.kalender.month + '"]';

        document.querySelector(query).classList.add("active");
    }

    renderDay()
    {
        let dateInfos = window.kalender.getDateInfos();

        if(dateInfos.date < 10)
        {
            document.getElementById("k_day_head_day").innerHTML = "0" + dateInfos.date;
        }
        else
        {
            document.getElementById("k_day_head_day").innerHTML = dateInfos.date;
        }
        
        document.getElementById("k_day_head_weekday").innerHTML = dateInfos.weekday_text;
    }

    renderTableDays()
    {

    }
}