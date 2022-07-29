import './ContentTable.scss'
import { Table } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { digitalCurrenciesGet } from '../../requests/digitalCurrencies';
import DigitalCurrenciesContext from '../Context/DigitalCurrenciesContext';
;




const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['ascend'],
    render:(text,record) => {
      return(
        <span className='rank-style'>{record.rank}</span>
      )
    }
  },
  {
    title: 'Name',
    dataIndex: 'name' ,
    width:250,
    render: (text,record) => {
      return(
        <div>
          <Link to={`assets/${record.id}`}>
              <img 
              className='iconTableImg' 
              style={{ width:"33px", margin:"0 10px 0 0" , display:"inline-block"}} 
              src={`https://assets.coincap.io/assets/icons/${record.symbol.toLowerCase()}@2x.png`} 
              alt={`${record.symbol.toLowerCase()}`}
              /> 

               <div className='iconTableLink' style={{display:"inline-block", verticalAlign:"middle", margin:"10px 0 0 0" }} >
                  <Link to={`assets/${record.id}`} style={{color:"black"}}>{record.name}
                  <p style={{fontSize:"0.8em", opacity:"0.7" }}>{record.symbol}</p>
                  </Link>
               </div>
          </Link>
           
        </div>
     )
    } 
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width:80,

  },
  {
    title: 'MarketCap',
    dataIndex: 'marketCap',
    width:150,
   
  },
  {
    title: 'VWap(24Hr)',
    dataIndex: 'vWap',
   
  },
  {
    title: 'Supply',
    dataIndex: 'supply',
  },
  {
    title: 'Volume(24Hr)',
    dataIndex: 'volume',
    width:150,
  },
  {
    title: 'Change(24Hr)',
    dataIndex: 'change',
    render:(text,record) => {
      return(
        <span className='color-change' style={{color:record.change > 0 ? 'green' : 'red' }}>{record.change}</span>
      )
    }
   },
];

 
 


const TableApp = () => {

  const {currency,setCurrency} = useContext(DigitalCurrenciesContext);
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState();
  console.log(loading)



  useEffect(() => {
    getDigitalCurrencies();
  }, []);
  
  const getDigitalCurrencies = async () => {
    setLoading(true);
    await digitalCurrenciesGet().then((response) => {
      setCurrency(response.data.data);
      console.log(response.data.data);
    }).catch((error)=>{
      setError(error.message);
    }).finally(()=>{
      setLoading(false);
    })
  }
  
 
  const data = loading ? [] : currency.map(row => ({
    key:row.id,
    id:row.id, 
    rank: row.rank ,
     name:row.name ,
     price:`${'$'}  ${((Math.round(row.priceUsd)*100)/100)}`,
     marketCap:`${'$'}  ${((Math.round(row.marketCapUsd)*100)/100)}`,
     vWap:`${'$'}  ${((Math.round(row.vwap24Hr)*100)/100)}`,
     supply:((Math.round(row.supply)*100)/100),
     volume:`${'$'} ${((Math.round(row.volumeUsd24Hr)*100)/100)}`,
     change:`${((Math.round(row.changePercent24Hr)*100)/100)} `,
     symbol:`${row.symbol}`,
     }));
    

  return(
    <>
    <Table 
     columns={columns}
     dataSource={data} 
  
     pagination={{ pageSize: 20, showSizeChanger: false, position: ['bottomCenter'] } } /> 
    </>
  )
}
export default TableApp;