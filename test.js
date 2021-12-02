import { GenderGuesser } from "./GenderGuesser";

describe("Tests for GenderGuesser", () =>{
    let name;
    beforeAll(() =>{
        name = new GenderGuesser();
    });

    test("calling john", () =>{
        name.getGuess('john').then((result) =>{
            expect(result).resolves;
        });
    });

    test("testing male", () =>{
        name.getGuess('male').then(result =>{
            expect(result).arrayContaining('male');
        });
    });

});