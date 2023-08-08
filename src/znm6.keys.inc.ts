import { zm6conf } from "./znm6.inc";
import { int } from "./ZNM6/Type";

export const iterator_start:int = zm6conf.get('keys_iterator_start');
export let iterator:int = iterator_start;

export const ENABLED:int = iterator;
export const DISABLED:int = ++iterator;

export const STRING:int = ++iterator;
export const CHAR:int = ++iterator;
export const INT:int= ++iterator;
export const FLOAT:int= ++iterator;
export const HASH:int= ++iterator;
export const CLASS:int= ++iterator;
export const FUNCTION:int= ++iterator;
export const BOOLEAN:int= ++iterator;
export const INSTANCE:int= ++iterator;
export const UNKNOW:int= ++iterator;
export const UNKNOW_FUNCTION:int= ++iterator;

export const NOT_DEFINED:int = ++iterator;
export const NOT_INITIALIZED:int = ++iterator;