import './Swap.scss';
import Icon, {SettingFilled ,DownOutlined  } from '@ant-design/icons';
import InputApp from './Inputs';


const Swap = () => {
    return(
        <div className="container">
            <div className="container2">
                <div className="SwapHeader">
                     <h3 className="SwapHeader">Swap</h3>  
                     <i className='SwapSettings'><SettingFilled /></i>
                </div>
                <div className='Swapper'>
                   <div className='Swapper-table1'>
                   <div className='Swapper-label'>
                   <label>You Sell</label>
                    </div>
                    <div className='Swapper-sell'>
                    <input 
                    inputmode="decimal" 
                    minlength="1"
                     maxlength="79"
                      autocomplete="off"
                       autocorrect="off"
                        spellcheck="false"
                         pattern="^[0-9]*[.,]?[0-9]*$" 
                         type="text" placeholder="0" /> 
                           {/* //////////.اینو چک کن:وقتی ولیو رو برمیدارم ورودی میگیره +حروف اگر ولیو باشه اصلا نمیگیره */}
                    <button>
                        <span>Select a token</span>
                        {/* <i aria-hidden="true" ><DownOutlined /></i> */}
                    </button>
                    </div>
                   </div>
{/* ///////////////////////////////////////////////////////////////////////////////// */}
                <div className='Swapper'>
                    <div className='Swapper-table2'>
                    <img src="https://coincap.io/static/icons/shuffle.svg" /> 
                    </div>
                </div>
{/* ////////////////////////////////////////////////////////////////////////////////// */}
                   
                     <div className='Swapper-table3'>
                   <div className='Swapper-label'>
                   <label>You Sell</label>
                    </div>
                    <div className='Swapper-sell'>
                    <input 
                    inputmode="decimal" 
                    minlength="1"
                     maxlength="79"
                      autocomplete="off"
                       autocorrect="off"
                        spellcheck="false"
                         pattern="^[0-9]*[.,]?[0-9]*$" 
                         type="text" placeholder="0" /> 
                           {/* //////////وقتی ولیو رو برمیدارم ورودی میگیره +حروف اگر ولیو باشه اصلا نمیگیره */}
                    <button>
                        <span>Select a token</span>
                        {/* <i aria-hidden="true" ><DownOutlined /></i> */}
                    </button>
                    </div>
                   </div>
{/* ////////////////////////////////////////////////////////////////////////////////// */}

                <div className='Swapper'>
                    <div className='Swapper-table4'>
                    <button>Connect Wallet</button>
                    </div>
                </div>

{/* ////////////////////////////////////////////////////////////////////////////////// */}
                </div>
            </div>
        </div>

    )
}
export default Swap;