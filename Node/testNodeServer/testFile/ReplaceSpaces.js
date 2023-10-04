function replaceSpace(stringInput){
    return new Promise((resolve, reject) => {
        let splitString = stringInput.split('');
        console.log(splitString);
        let spaceReplacedString = [];
        let replacedString = "";
        for(let i = 0; i< splitString.length; i++){
            if(splitString[i] === " "){
                splitString[i] = "%20";
            }
            spaceReplacedString.push(splitString[i]);
        }

        console.log(spaceReplacedString);

        for(let i = 0; i< spaceReplacedString.length; i++){
            replacedString.concat(spaceReplacedString[i]);
        }

        console.log(replacedString);

        return resolve(replacedString);
    });
}

async function main(){
    let result = await replaceSpace("Hello World");
    console.log(result);
}

main();