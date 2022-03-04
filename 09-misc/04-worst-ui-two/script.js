// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    // let number = [];
    // let content = document.getElementById('target');
    // for(elem of content.innerText)
    // {
    //     number.push(elem);
    // }

    // let case1 = document.getElementById('part-one');
    // let case2 = document.getElementById('part-two');
    // let case3 = document.getElementById('part-three').innerText;
    // let case4 = document.getElementById('part-four').innerText;

    // document.getElementById("part-one").addEventListener("click", () => {
     
    //     if(number[2] == 9 && number[3] == 9)
    //     {
    //         number[2] = 6;
    //         number[3] = 0;
    //     }
    //     else{
       
    //         if(number[3] >= 9)
    //         {
    //             number[3] = 0;
    
    //             if(number[2] >= 9)
    //             {
    //                 number[2] = 0;
    //                 if(number[1] > 4)
    //                 {
    //                     number[1] = 4;
    //                 }
    //                 else
    //                 {
    //                     number[1]++;
    //                 }
    //             }
    //             else
    //             {
    //                 number[2]++;
    //             }
    //         }
    //         else
    //         {
    //             number[3]++;
    //         }
    //     }


    //     case1.innerText = number[1] + number[2] + number[3];

    //     console.log(number[1], number[2], number[3]);
    //     console.log(case1.innerText);

    
    // });
    // document.getElementById("part-two").addEventListener("click", () => {
    //     if(number[4] == 9 && number[5] == 9)
    //     {
    //         number[4] = 0;
    //         number[5] = 0;
    //     }
    //     else{
       
    //         if(number[5] >= 9)
    //         {
    //             number[5] = 0;
    
    //             if(number[4] >= 9)
    //             {
    //                 number[4] = 0;
    //             }
    //             else
    //             {
    //                 number[4]++;
    //             }
    //         }
    //         else
    //         {
    //             number[5]++;
    //         }
    //     }

    //     case2.innerText = number[4] + number[5];
    //     console.log(number[4], number[5]);



    // });
    // document.getElementById("part-three").addEventListener("click", () => {

    // });
    // document.getElementById("part-four").addEventListener("click", () => {

    // });

    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');

    let target = document.getElementById('target');
    
    target.innerHTML = '0' + partOne.innerText;
    
    document.getElementById("part-one").addEventListener("click", () => {

            //Change les données en nombre
            let value = parseInt(partOne.innerText);

            let newValue = (value + 1);

            if(value === parseInt(partOne.getAttribute('data-max')))
            {
                newValue = parseInt(partOne.getAttribute('data-min'));
            }

            // Change la valeur du cadre
            partOne.innerText = newValue;
            
    });

    document.getElementById("part-two").addEventListener("click", () => {

    });

    document.getElementById("part-three").addEventListener("click", () => {

    });

    document.getElementById("part-four").addEventListener("click", () => {

    });




})();
