import { useEffect } from 'react';
import { ReactFloatingBalloons } from "react-floating-balloons";
import './App.css';
import Boxes from './components/boxes';
import { useBoxes } from './context/boxes.context';
import { useGuess } from './context/guess.context';
import { usePossibleBingo } from './context/possibleBingo.context';
import { bingos, getCenter, data } from './utils'
import { useBingo } from './context/bingo.context';

function App() {

  const { setBoxes }: any = useBoxes()
  const { setGuess }: any = useGuess()
  const { setPossibleBingo }: any = usePossibleBingo()
  const { bingo, setBingo }: any = useBingo()

  useEffect(() => {
    setBoxes(data)
    setGuess({ marked: [getCenter(data)] })
    setPossibleBingo(bingos)
  }, [])

  return (
    <>
      <section className='h-screen py-16'>
        {
          <Boxes boxes={data} />
        }
      </section>
      {
        bingo && <ReactFloatingBalloons
          count={1}
          msgText="Bingo Bingo!!"
          colors={["yellow", "purple"]}
          popVolumeLevel={1}
          loop={false}
        />
      }
    </>
  );
}

export default App;
