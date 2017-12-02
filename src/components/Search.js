import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';

import Families from '../data/families';
import Family from './Family';

const KEYS_TO_FILTERS = ['name', 'website'];

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    const filteredFamilies = Families.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Search;
