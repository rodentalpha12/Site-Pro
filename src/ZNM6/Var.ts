/* eslint-disable */

import { BOOLEAN, CHAR, FLOAT, INT, NOT_DEFINED, NOT_INITIALIZED, STRING } from "../znm6.keys.inc";
import { key,hash, index } from "./Type";
import { computeBacktrace, Trace } from "./Debug";

export class Var {
    public index:index=NOT_DEFINED;
    public value:any=undefined;
    public type:key=NOT_INITIALIZED;
    public trace:Trace|undefined;

    constructor(val:any=NOT_DEFINED, index=''){
        this.trace = computeBacktrace()[2];
        this.value = val;
        this.type = computeVarType(this.value);
        this.index = index;
    }

    // public parse(type:index){

    // }
}

export class Hash {
    protected _hash:hash = {};

    constructor (hash:hash={}) {
        this._hash = hash;
    }

    public set (index:index, value:any) {
        this._hash[index] = value;
        return this;
    }

    public get (index:index) {
        return this._hash[index];
    }

    // public checkType () {

    // }
}

export function computeVarType(val:any) {
    const type = typeof val;
    switch(type){
        case 'string':
            if(val.length == 1){
                return CHAR;
            }
            return STRING;
        break;
        case 'boolean':
            return BOOLEAN;
        break;
        case 'number':
            if(Number.isInteger(val)){
                return INT;
            }
            return FLOAT;
        break;
        case 'function':
        case 'object':
            //const inspect = util.inspect(val);
            //console.log(inspect);
        break;
    }
    return 0;
}