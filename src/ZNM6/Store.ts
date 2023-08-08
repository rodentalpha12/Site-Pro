/* eslint-disable */

import { Hash } from "./Var";
import { index } from "./Type";

export abstract class Store {
    private static _data:Hash|undefined;

    public static set (index:index, val:any) {
        
        // if(this._data == undefined){
        //     this._data = new Hash();
        // }
        // this._data.set(index, val);
        // return this;
    }

    public static get (index:index) {
        // if(this._data == undefined){
        //     this._data = new Hash();
        // }
        // return this._data.get(index);
    }
}