import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });

    }
    onFormSubmit = (event) => {
        event.preventDefault();
        
       if(this.state.term !== "") this.props.onFormSubmit(this.state.term);

    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                <input placeholder="Youtube Search" onChange={this.onInputChange} value={this.state.term} className="form-control" type="text" />
                </div>
            </form>
        )
    }
}

export default SearchBar;