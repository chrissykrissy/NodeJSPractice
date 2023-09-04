//test.js file version 2.0
//Testing GeeSung

let letVar = 0;
const constVar = "Kekw, I can't be changed";
const string = 'lkaj;sdlfkjas';
const integer = 3;

//function addNumbers(parameter)
function addNumbers(number) {
    //must always have a return if you want the function to return a value that can be manipulated
    return (letVar += number);
    //console.log(`This console log is from within the funciton scope: ${i}`);
}

function ifLoops(bool) {
    if (bool === true) {
        console.log('true');
    } else if (bool === false) {
        console.log('false');
    } else if (bool === 1) {
        /*=== means both the data type and the value must match*/ console.log(
            'Hard match'
        );
    } else if (bool == '1') {
        /*== means that only the value has to match*/ console.log('Soft Match');
    } else {
        console.log('You failed to give me a boolean');
    }
}

function forLoops(number) {
    //for([variable] = [start number]; [variable] < [end number], [variable]++)
    for (let i = 0; i < number; i++) {
        console.log(`Current iteration: ${i}`);
    }
}

function whileLoops(number) {
    let i = 0;
    while (i < number) {
        console.log(`Current while iteration: ${i}`);
        i++;
    }
}

function switchCase(caseVar) {
    switch (caseVar) {
        case 'hi':
            console.log('hi, my name is program');
            break;
        case 'bye':
            console.log("Okay, bye.  I'll miss you");
            break;
        case 'word':
            console.log('Word up, homie');
            break;
        default:
            console.log('Can you repeat that?');
            break;
    }
}

function asyncFunction() {
    let i = 0;
    setTimeout(() => {
        i += 10;
    }, 1000);
    console.log(i);
}

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

function isWeekday(day){
    return new Promise((resolve, reject) => {
        try {
            const daysOfWeek = [ "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

            if(typeof(day) !== String){
                return reject("Error in data type");
            }

            for(let i = 0; i<daysOfWeek.length; i++){
                if(day.toLowerCase() === daysOfWeek[i]){
                    //console.log(`${day} is a weekday`);
                    return resolve(`${day} is a weekday`);
                } else {
                    //console.log(`${day} is not a weekday`);
                    return resolve(`${day} is not a weekday`);
                }
            }
        } catch (e) {
            //console.log(`Error in checking weekday.  ${day} does not match any existing day of the week`);
            return reject(`Error in checking weekday.  ${day} does not match any existing day of the week`);
        }
    });
}

function GeeSungsListOfDays(dayOfWeek) {
    return new Promise((resolve, reject) => {
        try{
            if ((typeof dayOfWeek) === 'string') {
                const listOfDays = [
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday',
                ];

                console.log(listOfDays[0]);
                console.log(dayOfWeek.toLowerCase());
                console.log(dayOfWeek.toLowerCase() === listOfDays[0]);
        
                switch(dayOfWeek){
                    case dayOfWeek.toLowerCase() === listOfDays[0]:
                        return resolve("Ugh, I hate Mondays!");
                    case dayOfWeek.toLowerCase() === listOfDays[1]:
                        return resolve("I HATE TUESDAYS!");
                    case dayOfWeek.toLowerCase() === listOfDays[2]:
                        return resolve("I HATE WEDNESDAYS!");
                    case dayOfWeek.toLowerCase() === listOfDays[3]:
                        return resolve("I HATE THURSDAYS!");
                    case dayOfWeek.toLowerCase() === listOfDays[4]:
                        return resolve("YAY, I LOVE FRIDAYS!");
                    case dayOfWeek.toLowerCase() === listOfDays[5]:
                        return resolve("YAY, I LOVE SATURDAYS!");
                    case dayOfWeek.toLowerCase() === listOfDays[6]:
                        return resolve("YAY, I LOVE SUNDAYS!");
                    default:
                        return reject(`${dayOfWeek} is an invalid day`);
                }
            } else {
                return "Invalid Data Type; Please try again"
            }
        } catch (e) {
            return reject("Something went terribly wrong");
        }
    });
}

async function main() {
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // await ifEvenOrOdd(array);

    let variable = "hi";
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

    console.log(await isWeekday(42)
    .catch(e => {
        return e;
    }));

    console.log(await GeeSungsListOfDays("monday")
    .catch(e => {
        console.log(e);
    }));

}

main();
