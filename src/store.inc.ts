/* eslint-disable */

export type index=string|number;

export interface hash {
    [index:index]:any
}

export abstract class Store {
    private static _data:hash = {};

    public static get (index:index) {
        return this._data[index];
    }

    public static set (index:index, value:any) {
        this._data[index] = value;
        return this;
    }
}

Store
    .set('timezone', 'Europe/Paris')
    .set('h1_title', 'Merci de votre visite');