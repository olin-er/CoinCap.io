import React from "react";

const DigitalCurrenciesIdContext = React.createContext( {
    currencyId:[],
    setCurrencyId:() => {}
});

export default DigitalCurrenciesIdContext;