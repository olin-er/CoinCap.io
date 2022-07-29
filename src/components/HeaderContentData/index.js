import './HeaderContentData.scss';

const HeaderContentData = () => {
    return(
        <div className='header-content-data'>
            <div className='header-content-data-container'>
                <div className='header-content-data-text-container'>
                  <div className='label'>MARKET CAP</div>
                  <div className='value'><span>$1.36T</span></div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='label'>EXCHANGE VOL</div>
                  <div className='value'><span>$80.50B</span></div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='label'>ASSETS</div>
                  <div className='value'><span>2,295</span></div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='label'>EXCHANGES</div>
                  <div className='value'><span>73</span></div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='label'>MARKETS</div>
                  <div className='value'><span>14,741</span></div>
                </div>
                <div className='header-content-data-text-container'>
                  <div className='label'>BTC DOM INDEX</div>
                  <div className='value'><span>33.4%</span></div>
                </div>
            </div>
          </div>
    )
}
export default HeaderContentData;



