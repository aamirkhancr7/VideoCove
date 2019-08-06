import React from 'react';
import arrow from '../img/arrow.svg';

class SearchBar extends React.Component {

    state = { searchItem: '' };

    inputChange = (event) => {
        this.setState({ searchItem: event.target.value })
    };

    onTermSubmit = (event) => {
        event.preventDefault();

        //this is the parent component
        this.props.onClickSubmit(this.state.searchItem)
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onTermSubmit} className="search-form">
                    <div class="search-label">
                        <div className="search-title">
                            <h4>Search Video</h4>
                        </div>
                        <img class="arrow-down" src={arrow} alt="arrow" width="40" height="40"/>
                    </div>
                    <input
                        type="text"
                        value={this.state.searchItem}
                        onChange={this.inputChange}
                        placeholder="Enter search term.."
                        autoFocus
                    />
                </form>
            </div>
        );
    }
};

export default SearchBar;
