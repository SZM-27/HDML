// Delear and Output student information including lab session day
let studentID = "101504409";
let fullName = "Sara Mambuco";
let labProfessor = "Azzad Kara";
let labSession = "Thursday";

document.write("<div style='font-size: 10pt; position: fixed; bottom: 10px; right: 10px;'>")
document.write('<strong>StudentID :</strong> ' + studentID + ' ' + '<strong>Full Name :</strong> ' + fullName + '<br>');
document.write('<strong>Lab Professor :</strong> ' + labProfessor + ' ' + '<strong>Lab Session Day :</strong> ' + labSession + '<br>');

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (num1 < num2) {
        _return = 1;
    } else if (num1 === num2) {
        _return = 0;
    } else {
        _return = 2;
    }
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (num1 < num2) {
        for (let i =num1; i <=num2; i++){
            _return +=i;
        }
    } else if (num1 > num2) {
        for (let i =num1; i >= num2; i--) {
            _return += i;
        }
    } else
        _return = (num1+num2)
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if(array_index >= 0 && array_index < array.length) {
        _return = true;
    } else {
        _return = false;
    }


    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 ===0){
            _return += array[i];
        }
    }

    if(array.length === 0 || _return === '') {
        _return = 0;
    }

    / Delear and Output student information including lab session day
    let studentID = "101504409";
    let fullName = "Sara Mambuco";
    let labProfessor = "Azzad Kara";
    let labSession = "Thursday";

    document.write("<div style='font-size: 10pt; position: fixed; bottom: 10px; right: 10px;'>")
    document.write('<strong>StudentID :</strong> ' + studentID + ' ' + '<strong>Full Name :</strong> ' + fullName + '<br>');
    document.write('<strong>Lab Professor :</strong> ' + labProfessor + ' ' + '<strong>Lab Session Day :</strong> ' + labSession + '<br>');

    function part2(num1, num2) {
        // Assign the return value to a variable named _return
        let _return = '';
        // Your code should start here
        if (num1 < num2) {
            _return = 1;
        } else if (num1 === num2) {
            _return = 0;
        } else {
            _return = 2;
        }

        /* Your code ends here.
           Don't add or change anything after this line.*/
        return _return;
    }


    function part3(num1, num2) {
        // Assign the return value to a variable named _return
        let _return = '';
        // Your code should start here
        if (num1 < num2) {
            for (let i =num1; i <=num2; i++){
                _return +=i;
            }
        } else if (num1 > num2) {
            for (let i =num1; i >= num2; i--) {
                _return += i;
            }
        } else
            _return = (num1+num2)

        /* Your code ends here.
           Don't add or change anything after this line.*/
        return _return;
    }


    function part4(array_index, array) {
        // Assign the return value to a variable named _return
        let _return = '';
        // Your code should start here
        if(array_index >= 0 && array_index < array.length) {
            _return = true;
        } else {
            _return = false;
        }


        /* Your code ends here.
           Don't add or change anything after this line.*/
        return _return;
    }


    function part5(array) {
        // Assign the return value to a variable named _return
        let _return = '';
        // Your code should start here
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 ===0){
                _return += array[i];
            }
        }

        if(array.length === 0 || _return === '') {
            _return = 0;
        }

        / Delear and Output student information including lab session day
        let studentID = "101504409";
        let fullName = "Sara Mambuco";
        let labProfessor = "Azzad Kara";
        let labSession = "Thursday";

        document.write("<div style='font-size: 10pt; position: fixed; bottom: 10px; right: 10px;'>")
        document.write('<strong>StudentID :</strong> ' + studentID + ' ' + '<strong>Full Name :</strong> ' + fullName + '<br>');
        document.write('<strong>Lab Professor :</strong> ' + labProfessor + ' ' + '<strong>Lab Session Day :</strong> ' + labSession + '<br>');

        function part2(num1, num2) {
            // Assign the return value to a variable named _return
            let _return = '';
            // Your code should start here
            if (num1 < num2) {
                _return = 1;
            } else if (num1 === num2) {
                _return = 0;
            } else {
                _return = 2;
            }

            /* Your code ends here.
               Don't add or change anything after this line.*/
            return _return;
        }


        function part3(num1, num2) {
            // Assign the return value to a variable named _return
            let _return = '';
            // Your code should start here
            if (num1 < num2) {
                for (let i =num1; i <=num2; i++){
                    _return +=i;
                }
            } else if (num1 > num2) {
                for (let i =num1; i >= num2; i--) {
                    _return += i;
                }
            } else
                _return = (num1+num2)

            /* Your code ends here.
               Don't add or change anything after this line.*/
            return _return;
        }


        function part4(array_index, array) {
            // Assign the return value to a variable named _return
            let _return = '';
            // Your code should start here
            if(array_index >= 0 && array_index < array.length) {
                _return = true;
            } else {
                _return = false;
            }


            /* Your code ends here.
               Don't add or change anything after this line.*/
            return _return;
        }


        function part5(array) {
            // Assign the return value to a variable named _return
            let _return = '';
            // Your code should start here
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 ===0){
                    _return += array[i];
                }
            }

            if(array.length === 0 || _return === '') {
                _return = 0;
            }


            /* Your code ends here.
               Don't add or change anything after this line.*/
            return _return;
        }
        /* Your code ends here.
           Don't add or change anything after this line.*/
        return _return;
    }
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


