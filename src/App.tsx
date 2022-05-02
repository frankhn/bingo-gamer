import React, { useEffect } from 'react';
import './App.css';
import data from './utils/data/boxes';
import Picker from './components/picker';
import Boxes from './components/boxes';
import Guess from './components/Guess';
import { useBoxes } from './context/boxes.context';

function App() {

  const { boxes, setBoxes }: any = useBoxes()
  useEffect(() => {
    setBoxes(data)
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
