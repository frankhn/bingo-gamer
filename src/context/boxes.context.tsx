import { createContext, useContext, useMemo, useState } from 'react';

const BoxesContext = createContext({ boxes: 0, marked: [] });

export const useBoxes = () => useContext(BoxesContext);

export const BoxesContextProvider = ({ children }: any) => {
    const [boxes, setBoxes] = useState({ boxes: 0, marked: [] });

    const providerValue: any = useMemo(() => ({ boxes, setBoxes }), [boxes, setBoxes]);

    return (
        <BoxesContext.Provider value={providerValue} >
            {children}
        </BoxesContext.Provider>
    );
};
