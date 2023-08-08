import { index } from "./Type";
import { Hash } from "./Var";

export class Log extends Hash {
    public name:index = '';

    constructor (name:index='') {
        super();
        this.name = name;
    }
}