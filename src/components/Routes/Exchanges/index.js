// import HeaderContentData from "../../HeaderContentData";
import ExchangesContentHeader from "./ExchangesContentHeader";
import ExTableApp from "../ExchangesTable";

const Exchanges = () => {
    return(
        <div  style={{margin:'66px 0 0 0'}}>
            <ExchangesContentHeader/>
            <div style={{margin:'200px 0 0 0',
        display:'flex',
        justifyContent:"center",
        margin:"-138px 0 0 0"
        
        }}>
           
            <ExTableApp/>
        </div>
        </div>
    )
}
export default Exchanges;