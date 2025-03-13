
// function numberSum() {
//     // Get the values from the input fields
//     var num1 = document.getElementById("NumberOne").value;
//     var num2 = document.getElementById("NumberTwo").value;
    
//     var result = parseInt(num1) + parseInt(num2);
    
//         document.getElementById('total').innerHTML = result;
   
// }

// function stringCompare(){

//     var str1 = document.getElementById("firstText").value;
//     var str2 = document.getElementById("secondText").value;
    
//     if (str1.toLowerCase() === str2.toLowerCase()) {
//         document.getElementById('isEqual').innerHTML = "Strings are equal";
//     } else {
//         document.getElementById('isEqual').innerHTML = "Strings are not equal";
//     }
// }
    // Compare the strings
    // var result = str1.localeCompare(str2);
    
    // // Display the result
    // document.getElementById('total').innerHTML = result;

//}

// function firstNumber() {
//     // Get the values from the input fields
//     var num1 = document.getElementById("NumberOne").value;
//     var num2 = document.getElementById("NumberTwo").value;
    
//     // Convert input values to integers
//     var result = parseInt(num1) + parseInt(num2);
    
//     // Display the result
//     document.getElementById('total').innerHTML = 'Total: ' + result;
// }


    // function setnewimage() {
    //     document.getElementById("img1").src = "assets/chat-c.png";  // Switch to new image
    // }

    // function setoldimage() {
    //     document.getElementById("img1").src = "./assets/chat-c-1.png";  // Switch back to the original image
    // }

    

    // function concatinateNum() {
    //     var val = document.getElementById('concatinateNum').value;
    //     var numbers = val.split('');  // Split the input string into individual characters

    //     var sum = numbers.reduce(function(accumulator, current) {
    //         var num = parseInt(current);
    //         return isNaN(num) ? accumulator : accumulator + num;
    //     }, 0);


    //     document.getElementById('total').innerHTML = "Total: " + sum;
    // }

    //when user input numbers display their sum one by one in real time (ex- 1+2+3=6)
    
    //task05
    function numberAddition() {
        var val = document.getElementById('getNumber').value;
        var numbers = val.split(''); // Split the input string into individual characters
        var sum = 0;
    
        // Use a for loop to go through each number
        for (var i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]); // Convert each character to an integer and add to sum
        }
    
        document.getElementById('total').innerHTML = sum; // Display the sum
    }
    

     //task06
     function wordCapitalize() {
        var val = document.getElementById('getWord').value.toLowerCase(); // Convert input to lowercase
        var words = val.split(' '); // Split the input string into individual words

        // Loop through each word
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1); // Capitalize first letter
            }
        }

        document.getElementById('aftercapital').innerHTML = words.join(' ');
    }
    //task07

    let randomNumbers = [];

    // Function to generate 100 random numbers
    function randomNumber() {
        randomNumbers = [];
        let randomNumsText = '';
        for (let i = 0; i < 100; i++) {
            let x = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
            randomNumbers.push(x);
            randomNumsText += x + ' '; // Displaying random numbers
        }
        document.getElementById("randomNum").innerHTML = randomNumsText;
    }

    // Function to check divisibility
    function numberAddition() {
        let inputVal = document.getElementById("getWord").value;
        let modResults = [];
        
        if (inputVal) {
            inputVal = parseInt(inputVal);
            randomNumbers.forEach(function(num) {
                if (inputVal % num === 0) {
                    modResults.push(num);
                }
            });
            document.getElementById("aftercapital").innerHTML = modResults.length > 0 
                ? "Divisible by: " + modResults.join(', ') 
                : "No divisible numbers found.";
        } else {
            document.getElementById("aftercapital").innerHTML = '';
        }
    }

    // Initialize random numbers
    randomNumber();

