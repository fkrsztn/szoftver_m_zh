import axios from "axios";

export class GenderGuesser {
    getGuess(name){
        let a = axios.get('https://api.genderize.io/?name=' + name);
        return a;
    }
}