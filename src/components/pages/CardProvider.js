import React, { createContext, useContext, useReducer } from "react";
const CardStateContext = createContext([]);
const CardDipatchContext = createContext();
const reducer = (state, actions) => {

    switch (actions.type) {
        case "ADD":
            return [...state, actions.foodItem];
        
        case "DELETE":
            {
                let newArr = [];
                for (let i = 0; i < state.length; i++) {
                    if (i == actions.removeId) continue;
                    newArr.push(state[i]);
                }
                return newArr;
            }
        case "UPDATE":
            {
                let newArr = state;
                newArr.find((item, i) => {
                    if (item.foodId == actions.foodItem.foodId) {
                       
                        newArr[i] = { ...newArr[i], ...actions.foodItem }
                        return newArr;
                    }
                })
                return newArr;
            }
        case "DROP" :
            return [];
        default:
            return state;
    }

}

export default function CardProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <>
            <CardDipatchContext.Provider value={dispatch}>
                <CardStateContext.Provider value={state}>
                    {children}
                </CardStateContext.Provider>
            </CardDipatchContext.Provider>
        </>
    )
}

export const useStateCard = () => useContext(CardStateContext);
export const useDispatchCard = () => useContext(CardDipatchContext);
