import {readFileSync} from "fs";

const allCalories = readFileSync('./input.txt', 'utf-8');

const elvesWithCalories = allCalories.split("\n");

let formattedElves: any[] = []
let mostCalories: number = 0

let elfWithMost: number = 0;

let temporary: string[] = [];

elvesWithCalories.forEach((elf: string) => {

    if (elf !== "") {
        temporary.push(elf)
    } else {
        formattedElves.push(temporary)
        temporary = []
    }
})

function getCalories(remainingElves: any): number {

    remainingElves.forEach((elf: any, index: number) => {
        let elfCalorieCount: number = 0;
        elf.forEach((meal: string) => {
            elfCalorieCount += Number(meal);
            if (elfCalorieCount > mostCalories) mostCalories = elfCalorieCount;
        })

        if (elfCalorieCount === mostCalories) elfWithMost = index;
    })

    return mostCalories;
}


let topThree: number[] = [];

function getTopThreeElves(elves: any): number[] {

    let topCalories = getCalories(elves)

    topThree.push(topCalories)

    if (topThree.length === 3) {
        return topThree;
    } else {
        const filteredElves = elves.filter((elf: any, index: number) => index !== elfWithMost);
        mostCalories = 0;
        elfWithMost = 0;
        return getTopThreeElves(filteredElves);
    }

}

const answer = getTopThreeElves(formattedElves);

console.log(answer)