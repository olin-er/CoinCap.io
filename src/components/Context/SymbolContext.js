import React from "react";

const SymbolContext = React.createContext( {
    currency:[],
    setCurrency:() => {}
});

export default SymbolContext;