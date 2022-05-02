import React, { useState } from 'react'
import { useGuess } from '../context/guess.context'

export default () => {
    const [state, setState] = useState({ loading: false })
    const { guess, setGuess }: any = useGuess()
    return (
        <section className='flex justify-center flex-row'>
            { guess.guess }
        </section>
    )
}