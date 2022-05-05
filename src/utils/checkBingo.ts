export const checkIfBingo = (marked: Array<number>, possibleBingos: Array<Array<number>>) => {
    let result: number[] = []
    let newPossiblebingos = possibleBingos
    possibleBingos.forEach((solution: Array<number>) => {
        const bingo = solution.every((element: number) => marked.includes(element));
        // console.log(bingo, '#bingo', solution)
        if (bingo) {
            console.log('Bingo', 'solution', possibleBingos.length, '************')
            newPossiblebingos = newPossiblebingos.filter((arr: number[]) => arr !== solution)
            result = solution
        }
    })
    return {
        result,
        newPossiblebingos
    }
}
