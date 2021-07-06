const baseURL = "https://ghibliapi.herokuapp.com/people";
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit', submitSearch);

function submitSearch(info){
    info.preventDefault();
    getInfo(info);
};

function getInfo() {
    fetch(baseURL)
        .then(response => response.json())
        .then(json => displayInfo(json)); 
};

function displayInfo(character) {
    const characterName = document.getElementById('name')

    while (section.firstChild) {
        section.removeChild(section.firstChild);
      };

    for(let i=0; i<=43; i++){
        if (characterName.value.toLowerCase() == character[i].name.toLowerCase()){
            const current = character[i];

            const nameSection = document.createElement('div');
            const ageSection = document.createElement('div');
            const eyeSection = document.createElement('div');
            const hairSection = document.createElement('div');

            const newName = document.createElement('span');
            const age = document.createElement('span')
            const eyeColor = document.createElement('span');
            const hairColor = document.createElement('span');

            const newName2 = document.createElement('span');
            const age2 = document.createElement('span')
            const eyeColor2 = document.createElement('span');
            const hairColor2 = document.createElement('span');

            newName.textContent = current.name;
            age.textContent = current.age;
            eyeColor.textContent = current.eye_color;
            hairColor.textContent = current.hair_color;
            newName2.textContent = "Name: ";
            age2.textContent = "Age:";
            eyeColor2.textContent = "Eye Color: ";
            hairColor2.textContent = "Hair Color: ";

            newName.setAttribute('class', 'displayContent');
            age.setAttribute('class', 'displayContent');
            eyeColor.setAttribute('class', 'displayContent');
            hairColor.setAttribute('class', 'displayContent');
            newName2.setAttribute('class', 'displayContent2');
            age2.setAttribute('class', 'displayContent2');
            eyeColor2.setAttribute('class', 'displayContent2');
            hairColor2.setAttribute('class', 'displayContent2');

            
            nameSection.setAttribute('class', 'section');
            ageSection.setAttribute('class', 'section');
            hairSection.setAttribute('class', 'section');
            eyeSection.setAttribute('class', 'section');
            

            section.appendChild(nameSection);
            section.appendChild(ageSection);
            section.appendChild(eyeSection);
            section.appendChild(hairSection);

            nameSection.appendChild(newName2);
            nameSection.appendChild(newName);
            ageSection.appendChild(age2);
            ageSection.appendChild(age);
            eyeSection.appendChild(eyeColor2);
            eyeSection.appendChild(eyeColor);
            hairSection.appendChild(hairColor2);
            hairSection.appendChild(hairColor);
        } 
    }

}

