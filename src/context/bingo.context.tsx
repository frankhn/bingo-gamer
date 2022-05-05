import { createContext, useContext, useMemo, useState } from 'react';

const BingoContext = createContext(false);

export const useBingo = () => useContext(BingoContext);

export const BingoContextProvider = ({ children }: any) => {
    const [bingo, setBingo] = useState(false);

    const providerValue: any = useMemo(() => ({ bingo, setBingo }), [bingo, setBingo]);

    return (
        <BingoContext.Provider value={providerValue} >
            {children}
        </BingoContext.Provider>
    );
};
