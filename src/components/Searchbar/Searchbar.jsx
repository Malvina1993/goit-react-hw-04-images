
import { useState } from 'react';
import  css from './Searchbar.module.css';

export const Searchbar = ({onSubmit}) => {

    
  const [searchValue, setValue] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchValue);
        
    }

    const handleChange = (e) => {
      setValue(e.target.value)
    }
    
  
    return (
      <header className={css.searchbar}>
        <form onSubmit={formSubmit} className={css.form}>
            <button
            type="submit" className={css.button}>
                  
            <span className={css.buttonLabel}>Search</span>
            </button>

            <input
            type="text"
            className={css.input}
            
            onChange={handleChange}
            placeholder="Search images and photos"
            value={searchValue}        
                
            />
        </form>
      </header>
    )
  }

