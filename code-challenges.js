// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const tempBP = (temp) => {
//     if(temp < 212) {
//         return `${temp} is below boiling point.`
//     } else if (temp > 212) {
//         return `${temp} is above boiling point.`
//     } else {
//         return `${temp} is at boiling point.`
//     }
// }
// console.log(tempBP(temp1))
// console.log(tempBP(temp2))
// console.log(tempBP(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

    // var myNumbers1 = [3, 7, 0, 6, -9]
    // var newNumbers = []
    // const mult5 = (array) => {
    //     for(let i=0; i < array.length; i++) {
    //        newNumbers.push(array[i] * 5)
    //     }
    //     return newNumbers
    // }
    // console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

//  var myNumbers2 = [8, -7, 0, 6, 2]
//  const multi5 = myNumbers2.map(value => {
//      return value * 5
//  })
//  console.log(multi5)
 




 // --------------------4) Create a function that removes all the vowels from a string.
 // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//    var stringWithVowels1 = "HeyThereLearnStudent"
//    var stringWithVowels2 = "ILoveJavaScript"
   
//    const noVowels = (string) => {
//        var newArr = string.split("")
//        return newArr.filter(value => {
//            return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"}).join("")
//    }
//    console.log(noVowels(stringWithVowels1))
//    console.log(noVowels(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

//  var notAString1 = true
//  var notAString2 = 42

// const noVowels = (string) => {
//     if (typeof string === "string") {
//         return string.split("").filter(value => {
//             return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"}).join("")
//     } else {
//         return `${string} is not a string.`
//     }
// }
//     console.log(noVowels(notAString1))
//     console.log(noVowels(notAString2))
    

// // --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// // Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// const catsOnly = (array) => {
//     return array.filter(value => {
//         return value.animal === "cat"
//     })
// }
// console.log(catsOnly(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// const nonCats = (array) => {
//     let nonKitties = array.filter(value => {
//         return value.animal !== "cat"
//     })
//     return nonKitties.map(value => {
//         return value.name
//     })
// }
// console.log(nonCats(toonimals))