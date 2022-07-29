import React from "react";

const DigitalCurrenciesContext = React.createContext( {
    currency:[],
    setCurrency:() => {}
});

export default DigitalCurrenciesContext;