import Buyable from "./buyable";

export default class Gadget implements Buyable {
    
    amount: number = 1;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number
    ) {

    }

}