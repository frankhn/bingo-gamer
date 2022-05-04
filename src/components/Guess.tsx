import { useGuess } from '../context/guess.context'

export default () => {
    const { guess }: any = useGuess()
    return (
        <section className='flex justify-center flex-row'>
            { guess.guess }
        </section>
    )
}