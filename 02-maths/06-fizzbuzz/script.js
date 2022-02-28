
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let n = 100;
    

    for(let x = 0; x <= n; x++)
    {
        if(x % 5 === 0 && x % 3 === 0)
        {
            console.log('FIIZBUZZ !')
        }
        else if(x % 3 === 0)
        {
            console.log('FIZZ !')
        }
        else if(x % 5 === 0)
        {
            console.log('BUZZ !')
        }
        else
        {
            console.log(x);
        }
    }


})();
