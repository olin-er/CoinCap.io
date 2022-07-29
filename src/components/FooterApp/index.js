
import React, { Fragment } from 'react';
import { Layout } from 'antd';
import './FooterApp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Footer } = Layout;

const FooterApp = () => {
    return(
        <Fragment>  
            <Footer className='FooterApp'>
                <div className='footer-Container'>

                    <div className='ListItem'>
                        <div  className="item">
                            <a href="/methodology" className='Title'>Methodology</a> 
                        </div>
                        <div  className="item">
                            <a href="https://shapeshift.zendesk.com/hc/en-us/requests/new" >Support</a>
                        </div>
                        <div className="item">
                            <a href="//docs.coincap.io">Our API</a>
                        </div>
                        <div  className="item">
                            <a href="/rate-compare">Rate Comparison</a>
                        </div>
                        <div  className="item">
                            <a href="https://shapeshift.com/careers">Careers</a>
                        </div>
                    </div>



                 <div className='ListItem '>

                    <div  className='Title'>LEGALS</div>
                    <div role="list" className='list-ItemBox' >
                        <div role="listitem" className="item">
                            <a href="https://assets.coincap.io/documents/terms_of_service.pdf">Terms of Service</a>
                        </div>
                        <div role="listitem" className="item">
                            <a href="https://shapeshift.com/privacy">Privacy Policy</a>
                        </div>
                    </div>



                    <div className='Title'>DISCLAIMER</div>
                    <div role="list" >
                        <div role="listitem" >
                            <span className='list-Span'>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</span>
                        </div>
                    </div>

                </div>




                <div className='ListItem'>
                    <div className="Title">FOLLOW US</div>
                    <a href="https://twitter.com/CoinCap_io" className='ICon'>
                    {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                    </a>
                    <a href="https://www.facebook.com/coincapmarketdata/videos/365220420785166/">
                     
                    </a>
               </div>     







                <div className='ListItem'>    
    
                <div className="Title">COINCAP APP AVAILABLE ON</div>
                <div  className="ui list">
                    <div  className="item">
                        <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap" target="_blank">
                            <img src="https://coincap.io/static/images/stores/google_play.svg" className="ui image" />
                                </a>
                                </div>
                                <div  className="item">
                                    <a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&amp;ign-mpt=uo%3D4" target="_blank">
                                        <img src="https://coincap.io/static/images/stores/apple_store.svg" className="ui image" />
                                    </a>
                                </div>
                                </div>
                </div>

            </div>

            </Footer>

             
        </Fragment>
            
       
    )
}
export default FooterApp;

