export class AttandanceList{
    constructor(){
        const array = [];
    }

    add(name){
        if (array.includes(name)){
            return false;
        }    
        else{
            const name = array.push(name);
            return true;
        }
    
    }

    place(name, index){
        this.index = get.array;
    }

    has(name){
        if(this.array = name)
            return this.index
        else
            return false;
    }

    getList(){

    }
}