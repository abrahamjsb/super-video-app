import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
import { filterShowByText } from './Helpers/showHelpers'
const { shape, arrayOf, string } = React.PropTypes

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(show => filterShowByText(show, this.props.searchTerm))
            .map(show => {
              return <ShowCard key={show.imdbID} {...show} />
            })}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  searchTerm: string,
  shows: arrayOf(
    shape({
      title: string,
      description: string
    })
  )
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
export const Unwrapped = Search
