
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById('dob-year').value;
        let month = document.getElementById('dob-month').value;
        let day = document.getElementById('dob-day').value;

        let date = new Date();

        let currentYear = date.getUTCFullYear();

        let yearDiff = currentYear - year;
        let monthDiff = date.getMonth() - month;
        let dayDiff = date.getDay() - day;

    });
})();
