/* eslint-disable */

import { backtrace } from './Type';

export class Trace {

    public file='';
    public function='';
    public line=0;
    public char=0;

}

export function computeBacktrace () {
    const backtrace:backtrace = [];
    const stack = new Error().stack;

    const regxpFunc = new RegExp(/at (.*) /gmi);
    const regxpFile = new RegExp(/\((.*)\)/gmi);

    // @ts-ignore
    const funcs:Array<string> = stack.match(regxpFunc);
    // @ts-ignore
    const files:Array<string> = stack.match(regxpFile);

    let tr_file:Array<string>=[];

    for(const i in funcs){
         const trace = new Trace;

         trace.function = funcs[i].substring(3, funcs[i].length-1);
         tr_file = files[i].substring(1,files[i].length-1).split(':')
         trace.file = tr_file[0];
         trace.line = parseInt(tr_file[1]);
         trace.line = isNaN(trace.line) ? 1 : trace.line;
         trace.char = parseInt(tr_file[2]);

         backtrace.push(trace);
    }

    return backtrace;
}