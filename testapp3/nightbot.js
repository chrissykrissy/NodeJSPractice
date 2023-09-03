const collectioOfCharacters = [];

const Character = {
    "bio": {
        "name": "",
        "age": "",
        "height": "",
        "weight": ""
    },
    "stats": {
        "str": "",
        "mag": "",
        "spd": "",
        "def": "",
        "res": ""
    },
    "inventory": []
}

async function getCharacter(characterName){
    return new Promise((resolve, reject) => {
        for(let i = 0; i < collectionOfCharacters.length; i++){
            if(collectionOfCharacters[i].name === characterName){
                return resolve(collectionOfCharacters[i]);
            } else {
                return reject("Character does not exist.  Create a new one?");
            }
        }
    });
}

async function createACharacter(characterData){
    return new Promise((resolve) => {
        const characterSheet = new Character();
        characterSheet.bio.name = characterData.name;
        characterSheet.bio.age = characterData.age;
        characterSheet.bio.height = characterData.height;
        characterSheet.bio.weight = characterData.weight;

        characterSheet.stats.str = characterData.str;
        characterSheet.stats.mag = characterData.mag;
        characterSheet.stats.spd = characterData.spd;
        characterSheet.stats.def = characterData.def;
        characterSheet.stats.res = characterData.res;

        collectionOfCharacters.push(characterSheet);

        return resolve(characterSheet);
    });
}