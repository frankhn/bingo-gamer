import { Iboxes } from '../interfaces/boxes.interface'
import BoxItem from './BoxItem'

export default ({boxes}: { boxes: Array<Iboxes>}) => {
    return (
        <div className='grid justify-center'>
            <div className="border-4 grid grid-cols-5 gap-0 mt-20">
                {
                    boxes && boxes.map((box: Iboxes) => <BoxItem {...box} />)
                }
            </div>
        </div>
    )
}