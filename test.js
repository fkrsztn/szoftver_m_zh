import { GenderGuesser } from "./GenderGuesser";
import { AttandanceList } from "./AttandanceList";

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


describe("Tests for AttandanceList", () =>{
    let array;
    beforeAll(() =>{
        array = new list();
    });

    test("not empty", () =>{
        expect(array.add()).toBe(0);
    })
});