import { Trace } from "./Debug";

export type index = string|number;
export type key = string|number;
export type int = number;
export type float = number;
export type char = string;

export interface hash {
    [index:index]: any
}

export type backtrace = Array<Trace>;