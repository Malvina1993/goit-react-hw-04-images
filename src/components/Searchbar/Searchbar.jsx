import React, { Component } from 'react'
import  css from './Searchbar.module.css';

export default class Searchbar extends Component {

    state = {
        value: ''
    }
  
    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    
    render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.formSubmit} className={css.form}>
            <button
            type="submit" className={css.button}>
                  
            <span className={css.buttonLabel}>Search</span>
            </button>

            <input
            type="text"
            className={css.input}
            // autocomplete="off"
                    // autofocus
            onChange={this.handleChange}
            placeholder="Search images and photos"
            value={this.state.value}        
                
            />
        </form>
      </header>
    )
  }
}
