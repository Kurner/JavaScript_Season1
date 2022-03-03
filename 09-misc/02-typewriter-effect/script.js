// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = document.getElementById('target');
    let textContent = text.innerText;
    text.innerText = ""; 
    let i = -1;
    let speed = 0;

    function typeWritter(){
        
        if(i < textContent.length) {
            
            speed = Math.floor(Math.random() * 1000);

            text.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typeWritter, speed);
    
    
        }
    }
    typeWritter();
})();
