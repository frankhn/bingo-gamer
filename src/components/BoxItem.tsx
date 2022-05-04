import { useGuess } from '../context/guess.context';
import { Iboxes } from '../interfaces/boxes.interface';

function BoxItem({ text, id, marked }: Iboxes) {

    const { guess }: any = useGuess()

    return (
        <>
            {
                guess.marked.includes(id)
                    ? <div key={id} className="w-32 h-32 text-center border-2 bg-gray-300 py-6 px-2 whitespace-wrap">
                        {
                            `${text}`
                        }
                    </div>
                    : <div key={id} className="w-32 h-32 text-center border-2 py-6 px-2 whitespace-wrap">
                        {
                            `${id}`
                        }
                    </div>
            }
        </>
    );
}

export default BoxItem;
