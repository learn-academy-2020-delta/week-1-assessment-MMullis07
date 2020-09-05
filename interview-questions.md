# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: 
  A function is a callable block of code used to compute data by passing it arguments. It can be used to peform basic mathematics to filtering through arrays.

  Researched answer:
  A function takes some input and returns an output and there should be some sort of relationship between the input and the output. To use it you must define in the scope from which you wish to call it. You can pass through primitive parameters such as numbers or objects such as arrays. You must define the function and then call it. 


2. What is the difference between .map() and .filter()?

  Your answer: 
    .filter() goes through an array and filters out anything that matches the data type you are looking for and produces a new array. 
  
    .map() goes through an array and returns an array of the same length.

  Researched answer:
    .filter() loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition. It will return a subset of the given array. It takes in three argumemnts (value, index, and array). 

    .map() Iterates through an array and returns a new array of same length. Like .filter() it also takes in three arguments (value, index, and array). It will call a function for every array element in order of the original array. It does not change the original array.


3. What is the difference between console.log() and return?

  Your answer:  
    console.log() will actually cause whatever it is we are calling to be printed out in the console. 
                
    return simply stores whatever information we are "returning" to that codeblock/function/etc.

  Researched answer:
    console.log() is a function in JavaScript primarily used to print and display data. It can be used for debugging code. It can be used to print the results of a function, array, even mathematical outputs.

    The return state stops the execution of a function and returns a value from inside that function. It requires a value if one is not provided it will return "undefined". It also must be used inside a function.


4. In regards to functions, what is an argument?

  Your answer: 
    The argument is what the function takes in in order for it to run

  Researched answer: 
    That arguments are the real values passed to and received by the function. If the function changes the argument's value it does not change the parameter's original value.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
    Techniques: Usually done in pairs. One person is driver, other is navigator. They set a timer or complete a set number of tasks in their current roles. Once the timer goes off or they complete that number of tasks you switch roles. Continue this cycle until finish!

    Driver- Focuses on typing and listens to the navigator telling him what     to type

    Navigator- Focuses on the task that needs solved/completed and instructs the driver on what to type up

  Researched answer:
    Two developers work using only one machine. They may each have their own keyboard and mouse. One programmer acts as the driver while the other will proofread, spell check, and figure out what to code next. The roles are then switched. Studies have shown that paired programming results in 15% less bugs in code. 


6. What is TDD? Describe the work flow associated with TDD.

  Your answer: 
    Test-driven development. Describe the test. Set the Test. Write out test expectations. Test to see that it will fail appropriately. Finally, write code that makes test pass!

  Researched answer:
    Test-Driven Development is a development technique where you must first write a test that fails before you write new functional code. It is quickly being adopted by developers particularly those who agile oriented. There are three rules to TDD:

    1) You are not allowed to write any production code unless it is to make a failing unit test pass

    2) You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failure are failures.

    3) You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

    There are then two steps to TDD: 
    
    1) Introduce a test failure.
        Always start with a failing test of some kind. It will vary dependent on what you are testing. 

    2) Write minimal code required to pass the test.
        You now write as little code as possible to pass the failing test from step 1. During initial stages, this maybe is coding simple empy method bodies or running functions to return a value. In later stages, you use Mocks to test and then production implementation upon successful completion. 


7. What is something we did in class this week you found helpful?  

  Your answer: Coding challenges and more challenges. Repitition of Javascript is the only way I will get better. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React : an open-source JavaScript Library used for building user interfaces specifically for single-page applications. It is created and maintained by Facebook

- Yarn : Yarn is a new Javascript packages manager that focuses on speedy, determinisitc, and security. 

- React State : "State" is an object that represents the parts of the app that can change. Each component can maintain its own state.

- CRUD : Create Read Update Delete. The four basic functions for computer programming. 

- this : typically references a JavaScript element depending on the scope or context of its use. Can be used globally, and locally as in functions.
