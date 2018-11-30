export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mult = (a, b) => a * b;

export function div(a, b){
    if (b === 0) {
        return NaN;
    }
    return a / b;
}
