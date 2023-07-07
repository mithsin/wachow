import { useState } from 'react';
import { SearchLocationIcon } from 'components/Atoms/Icons';
import styles from './Inputs.module.scss';
export const SearchInput = () => {
    const [ inputState, setInputState ] = useState("")

    const onInputChange = (e) => {
        setInputState(e.target.value)
    }

    const onSearch = () => {
        console.log('search input is -->: ', inputState)
    }

    return(
        <div className={styles.searchInputWrapper}>
            <input 
            type="text" 
            role="combobox" 
            aria-label="Search nearby"
            placeholder="Enter Your street"
            className={styles.heroInput}
            onChange={ onInputChange }
            value={ inputState } />
            <span className={styles.SearchBtnWrap} onClick={onSearch}>
                <SearchLocationIcon className={styles.searchIcon} size="1x"/>
            </span>
      </div>
    );
};

export default SearchInput;