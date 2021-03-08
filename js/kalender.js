class Kalender{
    
    arr_monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    arr_monate = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

    arr_wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    arr_wochentage_kurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
    
    static init()
    {
        window.kalender = new Kalender();
    }

    constructor()
    {
        this.setDate(
            new Date()
        );
    }

    setDate(date)
    {
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDay();
    }
}