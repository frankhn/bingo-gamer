import { createContext, useContext, useMemo, useState } from 'react';

const GuessContext = createContext({ guess: 0, marked: []});

export const useGuess = () => useContext(GuessContext);

export const GuessContextProvider = ({ children }: any) => {
  const [guess, setGuess] = useState({ guess: 0, marked: [] });

  const providerValue: any = useMemo(() => ({ guess, setGuess }), [guess, setGuess]);

  return (
    <GuessContext.Provider value={providerValue} >
      {children}
    </GuessContext.Provider>
  );
};
