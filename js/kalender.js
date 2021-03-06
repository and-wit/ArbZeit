window.Kalender = {
    data: [1,2,3,4,5],
    function: function() {console.log("Function from Kalender")}
};

class Kalender{
    
    arr_monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    arr_monate = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

    arr_wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    arr_wochentage_kurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
    
    constructor()
    {
        this.datum = new Date();
        this.jahr = this.datum.getFullYear();
        this.monat = this.datum.getMonth();
        this.tag = this.datum.getDate();


        //Monate
        document.querySelector(".monat").addEventListener("click", function(ev){
            console.log(ev.target);
        },false);

        //Tage
        document.querySelector(".tabelle_tage").addEventListener("click", function(ev){
            window.kalender.selectTag(ev.target);
        },
        false);

        

    }

    kalenderHandler(ev){
        console.log(ev);
    }

    static isSchaltjahr = function(jahr = new Date().getFullYear()){
        
        if( ( (jahr % 4) == 0) && ( ( (jahr % 100) != 0) || (jahr % 400) == 0) )
        {
            return true;
        }
        return false;
    }

    static getAnzahlTage = function(jahr = new Date().getFullYear(), monat = new Date().getMonth()){

        let anzahlTage = 31;

        if(monat == 3 || monat == 5 || monat == 8 || monat == 10)
        {
            anzahlTage = 30;
        }

        if(monat == 1)
        {
            if(Kalender.isSchaltjahr(jahr) == true)
                {
                    anzahlTage = 29;
                }
                
            anzahlTage = 28;
        }

        return anzahlTage;
        
    }

    jahr_plus()
    {
        this.jahr++;
    }

    jahr_minus()
    {
        this.jahr--;
    }

    monat_plus()
    {
        this.monat++;
        if(this.monat > 11)
        {
            this.monat = 0;
            this.jahr_plus();
        }        
    }

    monat_minus()
    {
        this.monat--;
        if(this.monat < 0)
        {
            this.monat = 11;
            this.jahr_minus();
        }
    }
    
    setTag(tag){
        let anzahlTage = getAnzahlTage(this.jahr, this.monat);
        
        if(tag > anzahlTage)
        {
            this.datum = new Date(this.jahr, this.monat, anzahlTage);
        }
        else
        {
            this.datum = new Date(this.jahr, this.monat, tag);
        }
        
    }

    setMonat(monat){
        this.datum = new Date(this.jahr, monat, this.datum)
    }

    setJahr(jahr){
        this.datum = new Date(jahr, this.monat, this.tag);
    }

    getTagderWoche()
    {
        return (this.datum.getDay() + 6) % 7;
    }

    selectTag(ev)
    {        
        this.setActiveTag(ev);
    }

    setActiveTag(ev)
    {
        
        this.unsetActiveTag();
        
        if(ev)
        {
            ev.classList.add("active");
        }

    }

    unsetActiveTag()
    {
        let arr_el = document.querySelectorAll(".tabelle_tag_text, .active");

        if(arr_el)
        {
            arr_el.forEach(element => {
                element.classList.remove("active");
            });
        }
                
    }
}