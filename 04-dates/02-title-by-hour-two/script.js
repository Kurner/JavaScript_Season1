
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let date = new Date();
    let hours = date.getHours() * 60 + date.getMinutes();
    let timer = 17 * 60 + 30;

    console.log(timer);
    console.log(hours);
    
    if(timer <= hours)
    {
        document.getElementById('target').innerHTML = "Good evening !"
    }
    else
    {
        document.getElementById('target').innerHTML = "Hello !"
    }

})();
