// const mechaelInfo = {
//     firstName : "mechael" ,
//     lastName : "jackson" ,
//     age : 25 ,
//     job : "singer" ,
//     active : false ,
//     hobbies : ["singing" , "dancing" , "acting","play football"]
// }

// ////// dot notation (.)  ===> object name . key ....

// console.log(mechaelInfo.lastName)
// console.log(mechaelInfo.hobbies[mechaelInfo.hobbies.length-1])

// // {} ==> curly braces ; [] ===> curly brackets


////// bracket notation ::: ===> object name["key"] ;
// const mechaelInfo = {
//   firstName: "mechael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   active: false,
//   hobbies: ["singing", "dancing", "acting", "play football"],
// };

// // console.log(mechaelInfo["job"]);
// // console.log(mechaelInfo["hobbies"][1]);


// const intrestedIn = prompt(
//   "what do you want about mechael ? choose between firstName , lastName , age ......",
// );

// console.log(mechaelInfo[intrestedIn])

//// how to add data ( with . notation) : 
// const mechaelInfo = {
//   firstName: "mechael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   active: false,
//   hobbies: ["singing", "dancing", "acting", "play football"],
// };

// /// ====> syntaxe (object Name.new Key = new value) 

// mechaelInfo.location = "America"
// mechaelInfo.trophies = "oscar"
// console.log(mechaelInfo)


///// how to add with bracket [] notation : 
// const mechaelInfo = {
//   firstName: "mechael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   active: false,
//   hobbies: ["singing", "dancing", "acting", "play football"],
// };


// // /===> syntaxe ::: object Name["new-key"] = "new-value" ; 
 
// mechaelInfo["gender"] = "male"

// console.log(mechaelInfo)

///// edit (modification) : 
// const mechaelInfo = {
//   firstName: "mechael",
//   lastName: "jackson",
//   age: 25,
//   job: "singer",
//   active: false,
//   hobbies: ["singing", "dancing", "acting", "play football"],
//       bearthYear : 1903 , 
//     calcAge : function (now) {
//         return now - this.bearthYear
//     }
// };

// //// /// dot notation and bracket notation : object Name.oldKey = newValue  ; 

// mechaelInfo.age = 100 ; 

// mechaelInfo["firstName"]="peter"
// console.log(mechaelInfo)



// const jonas = {
//     firstName : "jonas" , 
//     lastName : "shmedman" , 
//     bearthYear : 1993 , 
//     calcAge : function (now) {
//         return now - this.bearthYear
//     }
// }

// console.log(jonas.calcAge(2026))