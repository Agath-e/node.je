const fs = require('fs');

const gender = ['M', 'F'];

const maleNames = ['Zbigniew', 'Horacy', 'Maurycy', 'Zenon', 'Ziemowit'];

const femaleNames = ['Zuzanna', 'Honorata', 'Monika', 'Zofia', 'Zyta'];

const lastName = ['Poduszka', 'Prasa', 'Panel', 'Pani', 'Pole'];

const people = [];

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

for(let i = 0; i < 21; i++) {
    let newFirstName = '';    
    let newGender = randChoice(gender); 
        console.log(newGender);
    if (newGender === 'M') {
        newFirstName = randChoice(maleNames);
    } else {
        newFirstName = randChoice(femaleNames);
    }
    let newLastName = randChoice(lastName);
    let newAge = Math.floor(Math.random() * 60 + 18);

    people.push ({
        gender: newGender,
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
    })

    
}

const data =  JSON.stringify(people, null, "");

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});