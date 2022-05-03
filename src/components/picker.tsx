import { useState } from 'react'
import { useGuess } from '../context/guess.context'
import { usePossibleBingo } from '../context/possibleBingo.context'
import { Iboxes } from '../interfaces/boxes.interface'
import { checkIfBingo, data } from '../utils'
import Spinner from './common/spinner'

export default () => {
    const [state, setState] = useState({ loading: false })
    const { guess, setGuess }: any = useGuess()
    const { possibleBingo, setPossibleBingo }: any = usePossibleBingo()

    // Generate random excluding already marked boxes
    const getPreparedData = (): Array<Iboxes> => {
        return data.filter(box => box.id !== Math.ceil(data.length / 2)).filter(val => !guess.marked.includes(val.id))
    }

    const handleGuesse = () => {
        setState((prevState) => ({ ...prevState, loading: true }))
        setTimeout(() => {
            let random = Math.floor(Math.random() * getPreparedData().length);
            console.log(random, '#random')
            random = getPreparedData()[random].id
            setGuess({ guess: random, marked: [...guess.marked, random] })

            // Check If Bingo
            const result = checkIfBingo([...guess.marked, random])
            if (result.length > 0) {
                console.log(result, 'Bingo Bingo')
                setPossibleBingo(possibleBingo.filter((p: number[]) => p !== result))
            }
            setState((prevState) => ({ ...prevState, loading: false }))
        }, 2000)
    }
    return (
        <section className='flex justify-center flex-row'>
            <button
                onClick={handleGuesse}
                className='border-2 w-32 h-10 rounded-lg bg-slate-300 border-transparent'>
                {state.loading
                    ? <Spinner />
                    : 'Guess'
                }
            </button>
            <div>
            </div>
        </section>
    )
}