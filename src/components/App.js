import React, { Component } from 'react'
import RestaurantsContainer from './RestaurantsContainer'
import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>Restaurants</h2>
        </div>
        
        <RestaurantsContainer />

      </div>
    )
  }
}

export default App
