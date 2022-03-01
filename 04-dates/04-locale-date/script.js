
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
        let date = new Date();

        let name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months =['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let day = date.getDay();
        let dayNumber = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getUTCMinutes();
  
        let displayDate = name[day] + ' ' + dayNumber + ' ' + months[month] + ' ' + year + ', ' + hours + 'h' + minutes;
        document.getElementById('target').innerHTML = displayDate;
})();
