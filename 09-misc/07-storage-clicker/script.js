// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let target = document.getElementById('target');
    let number = 0;
    let stocked;
    target.innerText = localStorage.getItem(stocked);

    document.getElementById("increment").addEventListener("click", () => {

        target.innerText++;
        number = target.innerText;
    
        localStorage.setItem(stocked, number);
    });

})();
