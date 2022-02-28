
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        
        let op_one = parseInt(document.getElementById("op-one").value);
        let op_two = parseInt(document.getElementById("op-two").value);

        switch (operation)
        {
            case 'addition':
                alert(op_one + op_two); 
                break;

            case 'substraction':
                alert(op_one - op_two);
                break;
            case 'multiplication':
                alert(op_one * op_two);
                break;
            case 'division':
                if(op_two == 0)
                {
                    alert('On peut pas diviser par 0, pauvre fou !');
                }
                else
                {
                    alert(op_one / op_two);
                }
                break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
