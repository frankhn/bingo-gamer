import { useEffect } from 'react';
import './App.css';
import Picker from './components/picker';
import Boxes from './components/boxes';
import Guess from './components/Guess';
import { useBoxes } from './context/boxes.context';
import { useGuess } from './context/guess.context';
import { usePossibleBingo } from './context/possibleBingo.context';
import { bingos, getCenter, data } from './utils'

function App() {

  const { boxes, setBoxes }: any = useBoxes()
  const { guess, setGuess }: any = useGuess()
  const { possibleBingoss, setPossibleBingo }: any = usePossibleBingo()


  useEffect(() => {
    setBoxes(data)
    setGuess({ marked: [getCenter(data)] })
    setPossibleBingo(bingos)
  }, [])

  return (
    <>
      <section className='h-screen py-16'>
        <Guess />
        <Picker />
        {
          <Boxes boxes={data} />
        }
      </section></>
  );
}

export default App;
