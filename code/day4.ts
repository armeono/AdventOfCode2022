import {readFileSync} from "fs";

const data = readFileSync('./input.txt', 'utf-8').split('\n')

let total: number = 0;

let formattedData: any[] = []

data.forEach((pair: string) => {
    let twoPairs: string[] = pair.split(/,|-/)
    formattedData.push(twoPairs)
})

formattedData.forEach(item => {
    if(parseInt(item[1]) >= parseInt(item[2]) && parseInt(item[3]) >= parseInt(item[0])){
        total += 1
    }
})

console.log(total)