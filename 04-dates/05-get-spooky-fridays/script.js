
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        var year = document.getElementById('year').value;
        var count = 0;
    for (var month=0; month<12; month++) {
        var d = new Date(year,month,13);
        if(d.getDay() == 5){
          count++;
       }
    }
    alert(count);
});
})();
