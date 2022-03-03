// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let number = [];
    let content = document.getElementById('target');
    for(elem of content.innerText)
    {
        number.push(elem);
    }

    let case1 = document.getElementById('part-one');
    let case2 = document.getElementById('part-two').innerText;
    let case3 = document.getElementById('part-three').innerText;
    let case4 = document.getElementById('part-four').innerText;

    document.getElementById("part-one").addEventListener("click", () => {
     
        if(number[2] == 9 && number[3] == 9)
        {
            number[2] = 6;
            number[3] = 0;
        }
        else{
       
            if(number[3] >= 9)
            {
                number[3] = 0;
    
                if(number[2] >= 9)
                {
                    number[2] = 0;
                    if(number[1] > 4)
                    {
                        number[1] = 4;
                    }
                    else
                    {
                        number[1]++;
                    }
                }
                else
                {
                    number[2]++;
                }
            }
            else
            {
                number[3]++;
            }
        }


        case1.innerText = number[1] + number[2] + number[3];
        content.innerHTML = case1;

        console.log(number[1], number[2], number[3]);
        console.log(case1.innerText);

    
    });
    document.getElementById("part-two").addEventListener("click", () => {

    });
    document.getElementById("part-three").addEventListener("click", () => {

    });
    document.getElementById("part-four").addEventListener("click", () => {

    });

})();
