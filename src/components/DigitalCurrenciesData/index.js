import { useContext } from 'react';
import './DigitalCurrenciesData.scss';
import DigitalCurrenciesContext from './../Context/DigitalCurrenciesContext';



export default function DigitalCurrenciesData({name,symbol,high,low,average,change}){

    const {currency,setCurrency} = useContext(DigitalCurrenciesContext);
    console.log('currency',currency);
       

    return(
        <>
            <div className='header-currency'>
                <div className='data-Wrapper' >
                    <div className='data-currency' >
                        <div className='col-left-data-currency'>
                            <div className='img-col-left-data-currency'>
                                <img  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} />
                            </div>
                            <div className='text-col-left-data-currency'>
                                <h3>
                                {name}<br/>
                                 <span>{`(${symbol})`}</span>
                                </h3>
                            </div>
                        </div>
                        <div className='col-right-data-currency'>
                            <div className='column-Left-right-data-currency' >
                                <h5>
                                    <span>HIGH :</span>
                                    <span>{`$ ${high} `}</span>
                                </h5>
                                <h5>
                                    <span>LOW :</span>
                                    <span>{`$ ${low}`}</span>
                                </h5>
                            </div>
                            <div className='column-Right-right-data-currency'>
                            <h5>
                                    <span>AVERAGE : </span>
                                    <span>{`$ ${average}`}</span>
                                </h5>
                                <h5>
                                    <span>CHANGE :</span>
                                    <span>{`$ ${change}`}</span>
                                </h5>

                            </div>
                        </div>
                    </div>
                   
                </div>
           
                

            </div>



            

            
         </>
    )
}