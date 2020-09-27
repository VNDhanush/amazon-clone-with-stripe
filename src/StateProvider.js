import React, { createContext, useContext, useReducer } from 'react';

//prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information form data layer
export const useStateValue = () => useContext(StateContext);