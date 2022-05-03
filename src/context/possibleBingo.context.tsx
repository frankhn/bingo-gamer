import { createContext, useContext, useMemo, useState } from 'react';

const PossibleBingoContext = createContext([]);

export const usePossibleBingo = () => useContext(PossibleBingoContext);

export const PossibleBingoContextProvider = ({ children }: any) => {
    const [possibleBingo, setPossibleBingo] = useState([]);

    const providerValue: any = useMemo(() => ({ possibleBingo, setPossibleBingo }), [possibleBingo, setPossibleBingo]);

    return (
        <PossibleBingoContext.Provider value={providerValue} >
            {children}
        </PossibleBingoContext.Provider>
    );
};
