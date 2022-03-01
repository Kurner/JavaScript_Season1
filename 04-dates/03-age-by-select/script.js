
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById('dob-year').value; //année de l'user
        let month = document.getElementById('dob-month').value; //mois de l'user
        let day = document.getElementById('dob-day').value; //jour de l'user

        let date = new Date(); //Date d'aujourd'hui

        console.log(date);

        let currentYear = date.getUTCFullYear();

        let yearDiff = currentYear - year; //Différence d'année
        let monthYear = date.getMonth();
        let dayYear = date.getDate();  
        
        let age = yearDiff;

        if(monthYear < month)
        {
            age--;
        }
        else if(monthYear > month)
        {
            if(dayYear < day)
            {
                age--;
            }
            else if(dayYear > day)
            {
                return age;
            }
        }
        
        alert("Vous avez " + age + " !");  
    });
})();
