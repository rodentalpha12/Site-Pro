import { int } from "./Type";

export class Trace {
    public file:string='';
    public function:string='';
    public line:string='';
    public char:string='';
    public timestamp:int = 0;

    constructor () {
        this.timestamp = Date.now();
    }
}