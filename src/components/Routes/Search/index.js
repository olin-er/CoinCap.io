import React, { useEffect, useState } from "react";
import './Search.scss';
import Layout from "antd/lib/layout";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import DigitalCurrenciesData from "../../DigitalCurrenciesData";
import DigitalCurrenciesContext from "../../Context/DigitalCurrenciesContext";
import { useContext } from "react";



export default function Search(){

    const {  Content  } = Layout;
    const { search } = useLocation();  
    const [keyword,setKeyword] = useState("");
    const [result,setResult] = useState([]);




const {currency,setCurrency} = useContext(DigitalCurrenciesContext);
   
useEffect(() => {
    const searchKeyword = queryString.parse(search).keyword; 
    setKeyword(searchKeyword); 
       
       
    const resultSearch = 
        currency.filter((item) => {
          if (item.name.toLowerCase().search(searchKeyword) > -1) {
            return item;
          }else if(item.name.search(searchKeyword) > -1){
            return item;
          }
        });
        setResult(resultSearch);
        console.log('resultSearch:', resultSearch); 
    },[search]);


    return(
        <>
        <Content  style={{display:'flex',margin:'200px 0 '}}>
            <div className="search-box-content">
                <h3>Search: {keyword}</h3>
                {result.map((item,index) => {
                    return(
                        <DigitalCurrenciesData  
                        key={item.id} 
                        name={item.name} 
                        symbol={item.symbol} 
                        high={item.changePercent24Hr} 
                        low={item.supply}
                        average={item.marketCapUsd}
                        change={item.vwap24Hr}
                        />
                    )
                })}
            </div>
        </Content>
        </>
        
    )
}