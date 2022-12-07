import {readFileSync} from "fs";

const data = readFileSync('./input.txt', 'utf-8')

let position: number[] = [];

data.split('').forEach((letter: string, index: number) => {
    const testSet = new Set(data.slice(index, index + 14))
    if(testSet.size === data.slice(index, index + 14).length) {
        position.push(index + 14);
    }
})

console.log(position[0]);

