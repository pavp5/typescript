import Buyable from "./buyable";

export default class Movie implements Buyable {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly yyear: number,
        readonly country: string,                
        readonly slogan: string,
        readonly genre: string,
        readonly time: string        
    ) {

    }

}