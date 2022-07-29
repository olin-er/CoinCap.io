import './SearchBox.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const SearchBox = () => {
    
    const [keyword,setKeyword] = useState("");
   
    const onChangeInput = (e) => setKeyword(e.target.value);
    // const History = useHistory() ;
    const navigate = useNavigate();
    

    const onClickSearch = () => {
        navigate(`/search?keyword=${keyword}`);
       
    }

    return(
            <div className='content'>
                <div className='search-part'>
                    <input type='text' className='search-part_input' placeholder="enter to Search" aria-label='search' onChange={onChangeInput} />
                    <button className='search-part_submit' onClick={onClickSearch}>
                        <FontAwesomeIcon  icon={faSearch}  aria-label='submit search' />
                    </button>
                </div>
            </div>
    )
}
export default SearchBox;