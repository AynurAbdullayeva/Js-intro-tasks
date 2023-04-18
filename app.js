// task1    (?)

// function eded(e){
//     if(e%7==0){
//         console.log("7-ye bolunur");
//     }
//     else {
//         console.log("7-ye bolunmur");
//     }
// }
// eded(49);





// task2    (?)

// const eded=(num)=>{
//     let dovr =0;
//     if(num<=50){
//         for (let i =1 ; i < num; i++) {
//        if(1%3==0){
//         dovr++;
//        }  
//     }
//     }
//      console.log(dovr);
// }




// task3
// function aylar(a) {
//     if (a == 1) {
//         console.log("Yanvar")
//     }
//     else if (a == 2) {
//         console.log("Fevral")
//     }
//     else if (a == 3) {
//         console.log("Mart")
//     }
//     else if (a == 4) {
//         console.log("Aprel")
//     }
//     else if (a == 5) {
//         console.log("May")
//     }
//     else if (a == 6) {
//         console.log("Iyun")
//     }
//     else if (a == 7) {
//         console.log("iyul")
//     }
//     else if (a == 8) {
//         console.log("Avqust")
//     }
//     else if (a == 9) {
//         console.log("Sentyabr")
//     }
//     else if (a == 10) {
//         console.log("Oktyabr")
//     }
//     else if (a == 11) {
//         console.log("Noyabr")
//     }
//     else if (a == 12) {
//         console.log("Dekabr")
//     }
//     else if (a > 12 || a <= 0) {
//         console.log("Invalid input")
//     }
// }
// aylar(8);




// task4
// function mesele(word,number){
//    for(i=0; i<=number; i++)
//    console.log(word)
// }
// mesele("code",8)




// task5

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(28);




// task6

// function eded(num) {
//     let factorial = 1;
//     for(let i = 1; i <= num; i++){
//         factorial= factorial * i;
//     }
//    return factorial;
// }

// console.log(eded(4))