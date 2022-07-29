// import './ContentTable.scss'
import './ExchangesTable.scss'
import { Table } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




////////////////////////////////////////////////////////////////////////////

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
     
    },
    {
      title: 'Name',
      dataIndex: 'name' ,
     
    },
    {
      title: 'Trading Pairs',
      dataIndex: 'tradingPairs',
      width:80,
  
    },
    {
      title: 'Top pair',
      dataIndex: 'exchangeUrl',
      width:150,
     
    },
    {
      title: 'Volume(24Hr)',
      dataIndex: 'percentTotalVolume',
     
    },
    {
      title: 'Total(%)',
      dataIndex: 'percentTotalVolume',
    },
    {
      title: 'Status',
      dataIndex: 'socket',
    },
  
  ];
  


 
 /////////////////////////////////////////////////////////////////////////////////////////
//  var locale = {
//     emptyText: "jdjjfdjfj",
//  }


const ExTableApp = () => {

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    const res = await axios.get("https://api.coincap.io/v2/exchanges");
    console.log(res.data.data)
    setState(res.data.data);
    setLoading(false);
  }
  
  
  const data = loading ? [] : state.map(row => ({
    id:row.id, 
    rank: row.rank ,
     name:row.name ,
     tradingPairs:row.tradingPairs,
  
     top:row.exchangeUrl,
     vWap:`${'$'}  ${((Math.round(row. percentTotalVolume)*100)/100)}`,
    //  supply:((Math.round(row. exchangeUrl)*100)/100),
     volume:row.volumeUsd,
     total:`${'%'} ${((Math.round(row. percentTotalVolume)*100)/100)} `,
     status:`${row.socket}`,
     }));
    
////////////////////////////////////////////////////////////////////////////////////////////
  return(
    <>
    <Table 
     columns={columns}
     dataSource={data} 
    //  pagination={false}
     pagination={{ pageSize: 20, showSizeChanger: false, position: ['bottomCenter'] } } />
  
     
    </>
  )
}
export default ExTableApp;