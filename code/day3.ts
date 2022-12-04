import {readFileSync} from "fs";

const data = readFileSync('./input.txt', 'utf-8').split('\n')

let firstHalf: any;
let secondHalf: any;

let total: number = 0;


data.forEach((backpack: string, index: number) => {

    firstHalf = backpack.slice(0, backpack.length / 2).split('')
    secondHalf = backpack.slice(backpack.length / 2, backpack.length).split('')

    let alreadyFound: any[] = [];

   firstHalf.forEach(letter => {
       if(alreadyFound[alreadyFound.length - 1] !== letter){
           if(secondHalf.includes(letter)) {
               alreadyFound.push(letter)
               addLetter(letter);
           }
       }

   })
})
function addLetter(a: string) {
    if (a >= 'a' && a <= 'z') {
        total += (a.charCodeAt(0) - 96)
    } else {
         total += (a.charCodeAt(0) - 38)
    }
}

console.log(total)
