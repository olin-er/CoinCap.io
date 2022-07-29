import './HeaderApp.scss';
import React from 'react';
import { Layout } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import SearchBox from '../SearchBox';
import { Link } from 'react-router-dom';
import Icon from '../Icon';


const { Header } = Layout;



const HeaderApp = () => {

 
    return(
    <Header className='Header' >
      <div className='header-link'>
        <Link to="/" >Coins</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/swap">Swap</Link>
      </div>
      
   

      <div className='header-logo'>
        <Icon />
      </div>




      <div className='header-icon'>
          <div className='searchOutLined'>
            <SearchBox />
          </div>
          
          <div className='settingOutLined'>
            <SettingOutlined />
          </div>
          <div className='contentWallet'>
            <button>Content Wallet</button>
          </div>
      </div>

      
    </Header>
    )
}
export default HeaderApp;