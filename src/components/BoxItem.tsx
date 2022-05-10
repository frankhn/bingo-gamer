import { useState } from 'react';
import { useBingo } from '../context/bingo.context';
import { useBoxes } from '../context/boxes.context';
import { useGuess } from '../context/guess.context';
import { usePossibleBingo } from '../context/possibleBingo.context';
import { Iboxes } from '../interfaces/boxes.interface';
import { checkIfBingo, data, getCenter } from '../utils'
import './boxItem.css'

function BoxItem({ text, id, index }: Iboxes & { index: number}) {

    const { guess, setGuess }: any = useGuess()
    const [state, setState] = useState({ loading: false })
    const { possibleBingo, setPossibleBingo }: any = usePossibleBingo()
    const { bingo, setBingo }: any = useBingo()
    const { boxes, setBoxes }: any = useBoxes()

    // Generate random excluding already marked boxes
    const getPreparedData = (): Array<Iboxes> => {
        return data.filter(box => box.id !== Math.ceil(data.length / 2)).filter(val => !guess.marked.includes(val.id))
    }

    const getIndex = (id: number) => {
        return boxes.findIndex((item: Iboxes) => item.id === id);
    }

    const handleGuesse = (id: number) => {
        setState((prevState) => ({ ...prevState, loading: true }))
        setTimeout(() => {
            // let random = Math.floor(Math.random() * getPreparedData().length);
            // console.log(random, '#random')
            // random = getPreparedData()[random].id
            // Get index 
            const index = getIndex(id)
            const marked = [...guess.marked, index]
            setGuess({ guess: index, marked })

            // Check If Bingo
            const { result, newPossiblebingos } = checkIfBingo(marked, possibleBingo)
            // console.log(result, '#result', marked, '#marked', newPossiblebingos, '#newPossiblebingos')
            if (result.length > 0) {
                setBingo(true)
                setPossibleBingo(newPossiblebingos)
            }
            setState((prevState) => ({ ...prevState, loading: false }))
        }, 500)
        setBingo(false)
    }

    const isCentered = (id: number): boolean => {
        return id === getCenter(data)
    }

    const styles = {
        centered: {
            height: "127px",
            width: "127px",
            borderRadius: "50%",
            borderWidth: "1px",
            borderColor: "#000",
            display: "inline-block"
        }
    }

    return (
        <>
            {
                boxes && guess.marked.includes(index)
                    ? <div key={id} onClick={() => handleGuesse(id)}
                        className={`w-32 h-32 text-xs text-center border-2 bg-gray-300 py-6 px-2 whitespace-wrap 
                    ${isCentered(index) && "text-xl text-rose-300 bg-gray-300 font-extrabold"}`}
                        style={isCentered(index) ? styles.centered : {}}>
                        {
                            isCentered(index) ?
                                <span className="dot">
                                    {text}
                                </span>
                                : `${text}`
                        }
                    </div>
                    : <div key={id} onClick={() => handleGuesse(id)}
                        className="w-32 h-32 text-xs text-center border-2 py-6 px-2 whitespace-wrap">
                        {
                            `${id}`
                        }
                    </div>
            }
        </>
    );
}

export default BoxItem;
