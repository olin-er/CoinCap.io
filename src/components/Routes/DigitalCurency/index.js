import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import Layout from 'antd/lib/layout/layout';
import './DigitalCurrency.scss';
import DigitalCurrenciesData from '../../DigitalCurrenciesData';
import { digitalCurrencyGet } from '../../../requests/digitalCurrencies';
import DigitalCurrenciesIdContext from '../../Context/DigitalCurrenciesIdContext';
import SymbolContext from '../../Context/SymbolContext';
import { ContactsOutlined } from '@ant-design/icons';


///////////////////////////////////////////////////////////////////////////////////////
const DigitalCurency = () => {

    const {  Content  } = Layout;
    const { id } = useParams() ;
    console.log('{id}',{id})
  
    const {currenyId,setCurrencyId} = useContext(DigitalCurrenciesIdContext);
    const {symbol,setSymbol} = useContext(SymbolContext);
    const [error,setError] = useState("");
   
    useEffect(()=>{
      getDigitalCurrency(id);
    },[])

    const getDigitalCurrency = async (id) => {
      await digitalCurrencyGet(id).then((response) => {
        setCurrencyId(response.data.data);
        setSymbol(response.data.data.symbol);
      }).catch((error)=>{
        setError(error.message);
      })
    }

    return(
        <>
        <Content  style={{display:'flex',margin:'100px 0 40px 0 '}}>
        
            <div className="digital-currency">
              
              {currenyId !== null && (
                <>
                <DigitalCurrenciesData
                  symbol={symbol}  
                  high={currenyId.changePercent24Hr} 
                  low={currenyId.supply}
                  average={currenyId.marketCapUsd}
                  change={currenyId.vwap24Hr}
                  name={currenyId.name}
                  key={currenyId.id}
                  />
                </>
              )}
            </div>
        </Content>
        </>
        
    )
}
export default DigitalCurency;














