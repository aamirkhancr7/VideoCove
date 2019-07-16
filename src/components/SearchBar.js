import React from 'react';

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
                    <label><h3>Search Video</h3></label>
                    <input
                        type="text"
                        value={this.state.searchItem}
                        onChange={this.inputChange}
                        autoFocus
                    />
                </form>
            </div>
        );
    }
};

export default SearchBar;
