
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById('target');
    let hours = new Date();

    if(hours.getHours() > 18)
    {
        document.getElementById('target').innerHTML = "Good evening !"
    }
    else
    {
        document.getElementById('target').innerHTML = "Hello !"
    }


})();
