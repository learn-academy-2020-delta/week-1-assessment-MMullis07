// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

//Describe the test
describe ("addThemUp", () => {
    //Set the test
    test("addThemUp that takes two numbers as arguments and returns the sum.", () => {
        //Write expectations
        expect(addThemUp(4, 28)).toEqual(32)
        expect(addThemUp(5, 95)).toEqual(100)
    })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.
    const addThemUp = (num1, num2) => {
        return num1 + num2
    }




// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

//Describe the test
describe ("triangleArea", () => {
    //Set the test
    test("riangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.", () => {
        //Write expectations
        expect(triangleArea(4, 4)).toEqual(8)
        expect(triangleArea(15, 4)).toEqual(30)
    })
})
    
// --------------------2b) See the test fail. THEN write the code to make the test pass.
    const triangleArea = (num1, num2) => {
        return (num1 * num2) / 2
    }