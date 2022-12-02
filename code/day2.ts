import {readFileSync} from "fs";

const strategy = readFileSync('./input.txt', 'utf-8')

/*
A rock
B paper
C scissors

X rock 1
Y paper 2
Z scissors 3

WIN 6
DRAW 4
LOSE 0

X LOSE
Y DRAW
Z WIN
 */

const points = [{
    letter: 'X',
    points: 0,
    state: 'lose',
    determine: [
        {
            letter: 'A',
            points: 3
        }, {
            letter: 'B',
            points: 1
        },
        {
            letter: 'C',
            points: 2
        }
    ]
}, {
    letter: 'Y',
    points: 3,
    state: 'draw',
    determine: [
        {
            letter: 'A',
            points: 1
        }, {
            letter: 'B',
            points: 2
        },
        {
            letter: 'C',
            points: 3
        }
    ]
}, {
    letter: 'Z',
    points: 6,
    state: 'win',
    determine: [
        {
            letter: 'A',
            points: 2
        }, {
            letter: 'B',
            points: 3
        },
        {
            letter: 'C',
            points: 1
        }
    ]

}
]

let totalPoints: number = 0;
let outcomes: string[] = [];

strategy.split("\n").forEach((item: string, index: number) => {
    points.forEach(point => {
        if (item.endsWith(point.letter)) {
            totalPoints += point.points
            point.determine.forEach(outcome => {
                if(item.startsWith(outcome.letter)) totalPoints += outcome.points;
            })

        }
    })
})

console.log(totalPoints)