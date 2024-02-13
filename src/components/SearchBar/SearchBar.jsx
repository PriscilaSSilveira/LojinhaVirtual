import React, {useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import './SearchBar.css';

function SearchBar(){

    const [searchValue, setSearchValue] = useState('')

    return(
        <form action="" className='searchbar'>
        <input type="search"
        value={searchValue}
            placeholder='Buscar'
            className='searchInput' 
            onChange={({target}) => setSearchValue(target.value)}
            required/>
            <button type="submit" className='searchButton'>
                <IoIosSearch/>
            </button>
    </form>
    )
}

export default SearchBar;