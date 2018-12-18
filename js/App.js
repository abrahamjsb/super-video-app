import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import preload from '../public/data.json'
import AsyncRoute from './AsyncRoute'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          loadingPromise={props => (
            <AsyncRoute props={props} component={Landing} />
          )}
        />
        <Match
          pattern='/search'
          component={props => {
            return (
              <AsyncRoute
                props={Object.assign({ shows: preload.shows }, props)}
                loadingPromise={Search}
              />
            )
          }}
        />
        <Match
          pattern='/details/:id'
          component={props => {
            const show = preload.shows.filter(
              show => props.params.id === show.imdbID
            )
            return (
              <AsyncRoute
                props={Object.assign({ show: show[0] }, props)}
                loadingPromise={Details}
              />
            )
          }}
        />
      </div>
    </Provider>
  )
}

export default App
