import React, { useState } from 'react'
import { useBoxes } from '../context/boxes.context'
import { useGuess } from '../context/guess.context'
import Spinner from './common/spinner'

export default () => {
    const [state, setState] = useState({ loading: false })
    const { guess, setGuess }: any = useGuess()
    const { boxes, setBoxes }: any = useBoxes()

    const handleGuesse = () => {
        setState((prevState) => ({ ...prevState, loading: true }))
        setTimeout(() => {
            const random = Math.floor(Math.random() * boxes.length);
            setGuess({ guess: random, marked: [...guess.marked, random] })
            console.log(boxes)
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