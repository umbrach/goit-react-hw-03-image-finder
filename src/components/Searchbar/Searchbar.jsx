import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';



class Searchbar extends Component {
  state = {
    queryValue: '',
  };

  hendleChange = e => {
    this.setState({
      queryValue: e.currentTarget.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.hendleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.hendleChange}
            value={this.state.queryValue}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;