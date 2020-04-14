
class Item{

    static lastiId = 0;


    constructor(text){
        this.id = Item.lastiId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;