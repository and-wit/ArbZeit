class KalenderView{

    frame = null;

    constructor(frame = "")
    {
        this.frame = frame;
    }

    render(dateInfos)
    {

        this.renderYear(dateInfos);
        this.renderMonth(dateInfos);
        this.renderDay(dateInfos);
        this.renderTableDays(dateInfos);
        this.setTableDayMarker(dateInfos)

    }

    renderYear(dateInfos)
    {
        document.getElementById("k_year_text").innerHTML = dateInfos.year;
    }

    renderMonth(dateInfos)
    {
        let el = document.querySelector(".k_month button.active");
        
        if(el)
        {
            el.classList.remove("active");
        }

        let query = '.k_month button[data-month="' + dateInfos.month + '"]';

        document.querySelector(query).classList.add("active");
    }

    renderDay(dateInfos)
    {
        document.getElementById("k_day_head_month").innerHTML = dateInfos.month_long;

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

    renderTableDays(dateInfos)
    {

        let arr_days = document.querySelectorAll(".table_days button");

        let index = 0;

        arr_days.forEach(element => {
            element.innerHTML = "&nbsp;";
            element.classList.remove("empty");
            element.classList.remove("entry");
        });

        {
            
        }

        for(let i = 1; i <= dateInfos.offset_before; i++)
        {
            arr_days[index].classList.add("empty");
            index++;
        }

        for(let j = 1; j <= dateInfos.days_in_month; j++)
        {
            if(j == dateInfos.date)
            {
                arr_days[index].classList.add("entry");
            }
            arr_days[index].innerHTML = j;
            arr_days[index].dataset.day = j;
            
            index++;
        }

        for(let k = 1; k <= dateInfos.offset_after; k++)
        {
            arr_days[index].classList.add("empty");
            index++;
        }

    }

    setTableDayMarker(dateInfos)
    {
        // let arr_marker = [2,10,20];


    }
}