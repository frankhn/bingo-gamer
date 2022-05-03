import { bingos } from "./data/possibleBingos"

export const checkIfBingo = (marked: Array<number>) => {
    let result: number[] = []
    bingos.forEach(solution => {
        const bingo = solution.every(element => {
            return marked.includes(element)
        });
        if (bingo) {
            result = solution
        }
    })
    return result
}
