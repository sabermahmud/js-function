// Coding Challenge (Easy)  আজ ১০টি Practice:

// Challenge 1
// দুইটি সংখ্যা যোগ করে Return করো।
// function add (num1 ,num2){
//     const sum = num1 + num2;
//     return sum
// }
//  add (25, 5);
// Interview Round:

//  Question 1
// তোমার এই কোডে—
// function add(num1, num2) { ... }
// num1 এবং num2-কে Parameter বলা হয় নাকি Argument?
// Ans: num1, num2 agulo holo Parameter.

// Question 2
// const sum = add(25, 5);
// এখানে 25 এবং 5-কে কী বলা হয়?
// ans:agulo k argument bole.

// Question 3
// যদি আমি লিখি
// add(25, 5);
// কিন্তু console.log() না লিখি এবং return-এর result কোথাও store না করি, তাহলে 30 কি screen-এ দেখা যাবে? কেন?
// ans: এখানে add(25, 5) 30 return করছে।
// কিন্তু সেই returned value-টা কেউ ব্যবহার করছে না।
// মানে না:
// console.log(add(25, 5))
// না const sum = add(25, 5)
// তাই JavaScript শুধু function execute করে, 30 return করে, তারপর সেই value ফেলে দেয় (discard করে)। তাই Screen-এ কিছুই দেখা যায় না।

// ************************************************
// Challenge 2
// তিনটি সংখ্যা যোগ করে Return করো।
// function add (num1, num2, num3){
//     const sum = num1 + num2 + num3;
//     return sum;
// }
// const total = add(10, 15, 20)
// console.log(total);

// Challenge 3
// একটি সংখ্যা Even নাকি Odd Return করো।
    function check (number){

        // if (number % 2 === 0){
        //     return "even"
        // }
        // else{
        //     return "odd"
        // }
        return number % 2 === 0 ? "even":"odd"
    }
    const result = check(53);
    console.log(result)
// Challenge 4
// দুইটি সংখ্যার মধ্যে বড়টি Return করো।

// Challenge 5
// তিনটি সংখ্যার মধ্যে বড়টি Return করো।

// Challenge 6
// একটি Array-এর Sum Return করো।

// Challenge 7
// একটি Array-এর Average Return করো।

// Challenge 8
// একটি String-এর Length Return করো।

// Challenge 9
// একটি সংখ্যার Square Return করো।

// Challenge 10
// একটি সংখ্যার Cube Return করো।