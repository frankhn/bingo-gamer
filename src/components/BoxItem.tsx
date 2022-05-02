import React from 'react';
import boxes from '../utils/data/boxes';

function BoxItem({ text, id }: { text: string, id: number }) {
    const centerBingoBox = () => (
        <div className="border-2 py-6 px-2" onClick={() => console.log("something", boxes[id])}>
            {text}
        </div>
    );

    const getCenter = () => {
        return Math.ceil(boxes.length / 2)
    }

    return (
        <>
            <div className="w-32 h-32 text-center border-2  py-6 px-2 whitespace-wrap " onClick={() => console.log("something", id)}>
                {
                    id === getCenter()
                        ?
                        "Call Bingo"
                        : `${text} ${id}`
                }
            </div>
        </>
    );
}

export default BoxItem;
