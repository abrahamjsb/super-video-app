import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'
const { string, func, object } = React.PropTypes

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  goToSearch (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  }
  render () {
    return (
      <div className='landing'>
        <h1>Super Video App</h1>
        <form onSubmit={this.goToSearch}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all' >or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: string,
  dispatch: func
}

Landing.contextTypes = {
  router: object
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
