import React from 'react';
import { useGuess } from '../context/guess.context';
import boxes from '../utils/data/boxes';

function BoxItem({ text, id }: { text: string, id: number }) {

    const { guess, setGuess }: any = useGuess()

    const centerBingoBox = () => (
        <div key={id} className="border-2 py-6 px-2" onClick={() => console.log("something", boxes[id])}>
            {text}
        </div>
    );

    const getCenter = () => {
        return Math.ceil(boxes.length / 2)
    }

    return (
        <>
            <div key={id} className="w-32 h-32 text-center border-2  py-6 px-2 whitespace-wrap "
                onClick={() => console.log("something", id)}>
                {
                    id === getCenter()
                        ?
                        "Call Bingo"
                        : `${id}`
                }
            </div>
        </>
    );
}

export default BoxItem;
