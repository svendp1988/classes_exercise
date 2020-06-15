export class StoryGenerator {

    constructor(template, names, places, actions) {
        this.STORY_TEMPLATE = template;
        this.NAMES = names;
        this.PLACES = places;
        this.ACTIONS = actions;
    }

    randomValueFrom(array){
        return array[Math.floor(Math.random()*array.length)];
    }

    randomFahrenheit() {
        return Math.floor(80 + Math.random()*60);
    }

    randomPounds() {
        return Math.floor(Math.random()*350);
    }

    convertToKg(weight) {
        return (weight * 0.45359237).toFixed(1);
    }

    convertToCelsius(temperature) {
        return ((temperature  - 32) * 5/9).toFixed(1);
    }

    generateRandomStory() {
        return this.STORY_TEMPLATE
            .split(" ")
            .map(word => {
                if (word.startsWith(":")) {
                    return this.replaceWordByVariable(word);
                }
                return word;
            })
            .join(" ");
    }

    replaceWordByVariable(word) {
        const customName = document.getElementById('customname');
        const ukRadio = document.getElementById("uk");

        word = word.replace(":", "").replace(":", "");
        // word = word.replace(":", "}");
        let comma = "";
        if (word.substr(word.length - 1, 1) == ",") {
            word = word.substr(0, word.length-1);
            comma = ", ";
        } else if (word.substr(word.length - 1, 1) == ".") {
            word = word.substr(0, word.length-1);
            comma = ". ";
        }

        console.log(word);

        let name = this.randomValueFrom(this.NAMES);
        let place = this.randomValueFrom(this.PLACES);
        let action = this.randomValueFrom(this.ACTIONS);
        let nameBox = customName.value.trim() ? customName.value : 'Bob';
        let weight = this.randomPounds();
        weight = ukRadio.checked ? `${weight} pounds` : `${this.convertToKg(weight)} kilograms`;
        let temperature = this.randomFahrenheit();
        temperature = ukRadio.checked ? `${temperature} degrees Fahrenheit` : `${this.convertToCelsius(temperature)} degrees Celsius`;

        switch (word) {
            case "name":
                word = name;
                break;
            case "place":
                word = place;
                break
            case "action":
                word = action;
                break;
            case "nameBox":
                word = nameBox;
                break;
            case "weight":
                word = weight;
                break;
            case "temperature":
                word = temperature;
                break;
            default:
                throw `Cannot find alternative for word`;
        }
        return word + comma;
    }
}
