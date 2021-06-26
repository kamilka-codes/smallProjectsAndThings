// 1. get number input from the user. Input from the user determines the number of times program will run.
// 2. set loop, when counter is <= to user input num, function continues
// 3. in the loop, create analytical conditions:
// - if counter modulo 3 is 0, print fizz
// - elseif counter modulo 5 is 0, print buzz
// --- note that if modulo 3 and modulo 5 are both 0, print fizzbuzz
// - else, print counter value

function fizzbuzz () {
    var limit = prompt("Feed me numbers!");
    function counter () {
        var number = 0;
        while(number <= (limit - 1)) {
            number++;
            if (number % 3 == 0)
                console.log("Fizz");
            if (number % 5 == 0)
                console.log("Buzz");
            if (number % 3 == 0 && number % 5 == 0)
                console.log("FizzBuzz");
            if (number % 3 != 0 && number % 5 != 0) 
                console.log(number);
            }
    }
    counter ();
}
fizzbuzz ();
