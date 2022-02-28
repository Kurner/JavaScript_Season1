
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    let button = document.querySelectorAll("button");

    button.forEach($btn =>
        $btn.addEventListener('click', () => document.body.style.background = $btn.id));

})();
