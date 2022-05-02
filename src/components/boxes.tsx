import React from 'react'
import BoxItem from './BoxItem'

export default ({boxes}: { boxes: Array<{ text: string, id: number }>}) => {
    return (
        <div className='grid justify-center'>
            <div className="border-4 grid grid-cols-5 gap-0 mt-20">
                {
                    boxes && boxes.map((box: { text: string, id: number }) => <BoxItem {...box} />)
                }
            </div>
        </div>
    )
}