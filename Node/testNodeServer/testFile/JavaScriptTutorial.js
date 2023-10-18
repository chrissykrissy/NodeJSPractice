/**********************
 * JAVASCRIPT TUTORIAL*
 **********************/

/**Git Test 10/18/2023*/

/**
 * TOPIC COVERED:
 * Use Ctrl+F and put in the topic name to jump to that example
 * 
 * [data assignment operators]
 * [function creation tutorial]
 * [if block tutorial]
 * [basic for loop tutorial]
 * [for loop tutorial]
 * [while loop tutorial]
 * [switch case tutorial]
 * [promise function tutorial]
 * [promise function example2]
 * [promise function example]
 * [main method tutorial]
 */

//[data assignment operators]
//let locks the variable to the current method scope
let letVar = 0;
//const cannot be changed and is immutable
const constVar = "Kekw, I can't be changed";
//var variables can be accessed on a universal scope
var string = 'lkaj;sdlfkjas';
const integer = 3;

//[function creation tutorial]
//function addNumbers(parameter)
function addNumbers(number) {
    //must always have a return if you want the function to return a value that can be manipulated
    return (letVar += number);
    //console.log(`This console log is from within the funciton scope: ${i}`);
}

//[Git Testing Purposes]
function forLoops(times){
    let res = 0;
    for(let i = 0; i < times; i++){
        console.log(`Hi, I have looped ${times} amount`);
        res ++;
    }
    return res;
}

//[if block tutorial]
function ifLoops(bool) {
    //if statement is given a comparitor and checks if that statement is true 
    if (bool === true) {
        //if it is, run this
        console.log('true');
    //else if gives another comparitor to check
    } else if (bool === false) {
        //else if it matches, run this code
        console.log('false');
    } else if (bool === 1) {
        /*=== means both the data type and the value must match*/ console.log(
            'Hard match'
        );
    } else if (bool == '1') {
        /*== means that only the value has to match*/ console.log('Soft Match');
    //else if nothing else matches
    } else {
        //run this
        console.log('You failed to give me a boolean');
    }
}

//[basic for loop tutorial]
function forLoops(number) {
    //for([variable] = [start number]; [variable] < [end number], [variable]++)
    for (let i = 0; i < number; i++) {
        console.log(`Current iteration: ${i}`);
    }
}

//[while loop tutorial]
function whileLoops(number) {
    let i = 0;
    //while comaparitor
    //while the comparitor is false
    //keep looping on the comparitor is true
    while (i < number) {
        console.log(`Current while iteration: ${i}`);
        //the i++ is necessary to eventually end the while loop
        //otherwise, i will never increment making the comparitor statement infinite
        i++;
    }
}

//[switch case tutorial]
function switchCase(caseVar) {
    //switch([variable to be compared])
    switch (caseVar) {
        //case [case statement]:
        case 'hi':
            //code manipulation
            console.log('hi, my name is program');
            //either return a value or break to move on
            break;
        case 'bye':
            console.log("Okay, bye.  I'll miss you");
            break;
        case 'word':
            console.log('Word up, homie');
            break;
        //the else statement of a switch case.  If none of the case matches, it moves to here
        default:
            console.log('Can you repeat that?');
            break;
    }
}

//[for loop tutorial]
function ifEvenOrOdd(array) {
    //returns a new promise
    return new Promise(() => {
        //for loop
        //sets i as the comparitor to 0
        //i<array.length is basically asying while i is less than the length of the array, keep looping
        //increments i by 1 so it could possibly break the comparison statement
        //array.length checks the count of values within your array
        for (let i = 0; i < array.length; i++) {
            //array[i] is looking for the array value at slot i
            console.log(array[i]);
            //if statement is using Modulus which divides left by right and checks the remainder
            //hence modulus == 0 checks that the remainder is equal to zero, making it even
            if (array[i] % 2 == 0) {
                console.log('even');
                //return "even";
            } else {
                console.log('odd');
                //return "odd";
            }
        }
    });
}

//[promise function tutorial]
function checkActiveAgent(user) {
    //returns a new Promise function
    //resolve will always return a non error value
    //reject will return an error value
    //reject will always trigger a .catch within a function
    return new Promise((resolve, reject) => {
        //console.log("in checkActiveAgent");
        //console.log(`Coding/Node/testNodeServer/testFile.js::checkActiveAgent::user::`, user);
        //"try" this block of code
        //if it succeeds, return the correct output
        try {
            //routes to a specific point within the user object
            const listOfAgents = user.agentInfo;
            //console.log(`Coding/Node/testNodeServer/testFile.js::checkActiveAgent::listOfAgents::`, listOfAgents[0]);
            //instatiates an empty array named inactive
            let inactive = [];
            //runs a for loop to loop through the list of agents
            for (let i = 0; i < listOfAgents.length; i++) {
                //if the active tag of the agent is false
                //console.log(`Coding/Node/testNodeServer/testFile.js::checkActiveAgent::listOfAgents[${i}]::`, listOfAgents[i]);
                if (listOfAgents[i].active === false) {
                    //creates a new variable named fullname and concatnates the first and last name of the agent
                    let fullname =
                        listOfAgents[i].firstname +
                        ' ' +
                        listOfAgents[i].lastname;
                    //pushes that name into the inactive array
                    inactive.push(fullname);
                } else {
                    //else
                    //creates a new variable with the first and last name of the agent
                    let fullname =
                        listOfAgents[i].firstname +
                        ' ' +
                        listOfAgents[i].lastname;
                    //logs that they are active
                    console.log(`${fullname} is an active agent`);
                }
            }

            //returns the array of inactive agents
            return resolve(inactive);
        } catch (e) {
            //if anything within the try block errors out, come here
            //logs out the error
            console.log(`System Error ${e}.  Please check your system`)``;
            //rejects the error so that the catch statement gets triggered in the parent function
            return reject(e);
        }
    });
}

//ruru - [promise function example]
function isWeekday(day) {
    return new Promise((resolve, reject) => {
        try {
            const daysOfWeek = [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday',
            ];

            if (typeof day !== String) {
                return reject('Error in data type');
            }

            for (let i = 0; i < daysOfWeek.length; i++) {
                if (day.toLowerCase() === daysOfWeek[i]) {
                    //console.log(`${day} is a weekday`);
                    return resolve(`${day} is a weekday`);
                } else {
                    //console.log(`${day} is not a weekday`);
                    return resolve(`${day} is not a weekday`);
                }
            }
        } catch (e) {
            //console.log(`Error in checking weekday.  ${day} does not match any existing day of the week`);
            return reject(
                `Error in checking weekday.  ${day} does not match any existing day of the week`
            );
        }
    });
}

//ruru - [promise function example 2]
function GeeSungsListOfDays(dayOfWeek) {
    return new Promise((resolve, reject) => {
        try {
            if (typeof dayOfWeek === 'string') {
                const listOfDays = [
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday',
                ];

                // console.log(listOfDays[0]);
                // console.log(dayOfWeek.toLowerCase());
                // console.log(dayOfWeek.toLowerCase() === listOfDays[0]);
                if (dayOfWeek.toLowerCase() === listOfDays[0]) {
                    return resolve('Ugh, I hate Mondays!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[1]) {
                    return resolve('I HATE TUESDAYS!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[2]) {
                    return resolve('I HATE WEDNESDAYS!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[3]) {
                    return resolve('I HATE THURSDAYS!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[4]) {
                    return resolve('YAY, I LOVE FRIDAYS!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[5]) {
                    return resolve('YAY, I LOVE SATURDAYS!');
                } else if (dayOfWeek.toLowerCase() === listOfDays[6]) {
                    return resolve('YAY, I LOVE SUNDAYS!');
                } else {
                    return reject(`${dayOfWeek} is an invalid day`);
                }

                // switch(dayOfWeek.toLowerCase()){
                //     case listOfDays[0]:
                //         return resolve("Ugh, I hate Mondays!");
                //     case listOfDays[1]:
                //         return resolve("I HATE TUESDAYS!");
                //     case listOfDays[2]:
                //         return resolve("I HATE WEDNESDAYS!");
                //     case listOfDays[3]:
                //         return resolve("I HATE THURSDAYS!");
                //     case listOfDays[4]:
                //         return resolve("YAY, I LOVE FRIDAYS!");
                //     case listOfDays[5]:
                //         return resolve("YAY, I LOVE SATURDAYS!");
                //     case listOfDays[6]:
                //         return resolve("YAY, I LOVE SUNDAYS!");
                //     default:
                //         return reject(`${dayOfWeek} is an invalid day`);
                // }
                
            } else {
                return 'Invalid Data Type; Please try again';
            }
        } catch (e) {
            return reject('Something went terribly wrong');
        }
    });
}

//[main method tutorial]
//Javascript normally doesn't use main methods as main methods are mostly used in object oriented, synchronous programming languages
//Since Javascript runs both asynchronously and doesn't use Objects as it's main source of data manipulation
//we can normally run the functions anywhere and anyway we virutally want
//However, promise functions are both objects and synchronous so we need to use a main method to run promise functions
//to run async await functions, use the async descriptor before the function descriptor and then use the await descriptor before
//the actual function call
//If for some reason you want to use a promise function outside of an async method, use the .then block.
//ctrl + f [then/catch example] for how to write a .then block
async function main() {
    let count = forLoops(10);
    console.log(count);

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    await ifEvenOrOdd(array);

    let variable = 'hi';
    console.log(typeof variable === 'string');

    let user = {
        username: 'user1',
        password: 'pass1',
        agentInfo: [
            {
                firstname: 'John',
                lastname: 'Doe',
                address: 'address1',
                age: '32',
                active: true,
            },
            {
                firstname: 'Jane',
                lastname: 'Doe',
                address: 'address1',
                age: '30',
                active: false,
            },
            {
                firstname: 'Bruce',
                lastname: 'Wayne',
                address: 'Gotham',
                age: '42',
                active: true,
            },
            {
                firstname: 'Alfred',
                lastname: 'Pennyworth',
                address: 'Gotham',
                age: '62',
                active: false,
            },
        ],
    };

    let results = await checkActiveAgent(user).catch((e) => {
        console.log(e);
    });

    console.log(`List of Inactive Agents \n`, results);

    //[then/catch example] - .then and .catch example
    isWeekday("Monday")
    //use .then to manipulate the output of a function
    //the symbol => is known as an IIFE - Immediate Invoked Function Expression which will apply the manipulation defined between {} after
    //the IIFE to the variable before the IIFE
    //In the below case, results is the variable that hosts the return output of the function that was called; in this case:  isWeekday
    //isWeekday runs > isWeekday returns an output > that output is now in results > => will now apply a functional manipulation to results
    .then(results => {
        //the functional manipulation in this case is the console.log
        console.log(results);
    })
    //use .catch to filter out any reject statements from a function call.  It functions similarly to the .then but instead
    //will only bubble up and catch reject statements from the promise function
    //output of the rejected return will be set to e; similar to how the resolve returns will be set to results in a .then
    .catch(e => {
        console.log(e);
    });

    //[await example] - this is how you would call a funciton using await
    const result = await GeeSungsListOfDays("Mondays")
    .catch(e => {
        console.log(e);
    });
    console.log(result);

}

main();
