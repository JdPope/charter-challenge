import React, { Component } from 'react'
import RestaurantsList from './RestaurantsList'
import SearchBar from './SearchBar'


class RestaurantsContainer extends Component {

  constructor() {
    super()
    this.state = {
      restaurants: undefined,
      sortedRestaurants: undefined,
      genres: undefined,
      states: undefined,
      searchTerm: ""
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchRestaurants()
    }, 700);

    setTimeout(() => {
        console.log(this.state.states)
        console.log(this.genres)
    }, 1400);

  }

  fetchRestaurants = () => {
    let url = "https://code-challenge.spectrumtoolbox.com/api/restaurants"
    fetch(url,
      {
        headers : {
          Authorization: 'Api-Key q3MNxtfep8Gt',
        },
      })
      .then(response => response.json())
      .then(resp => this.setState({
        restaurants: resp.sort((a,b) => a.name > b.name ? 1 : -1),
        sortedRestaurants: resp.sort((a,b) => a.name > b.name ? 1 : -1),
        states: new Set(resp.map(x => x.state)),
        genres: new Set(resp.map(x => x.genre))
      }))
    
  }

  updateSearchTerm = event => {
    this.setState({
        searchTerm: event.target.value
    })
  }
  
  filterRestaurants = (genre) => {
    if(genre !== "All"){
      this.setState({
        displayRestaurants: this.state.restaurants.filter(restaurant => restaurant.genre === genre)        
      })
    }else{
      this.setState({
        displayRestaurants: this.state.restaurants
      })
    }
  }

  // sortRestaurants = (sortBy) => {
  //   let arr = []
  //   switch(sortBy){
  //     case "Alphabetically":
  //       arr = this.state.displayRestaurants.sort((a,b) => a.name > b.name ? 1 : -1)
  //       break;
  //     case "Price":
  //         arr = this.state.displayRestaurants.sort((a,b) => a.price > b.price ? 1 : -1)
  //       break;
  //     default:
  //       console.log("Wrong choice")
  //   }
  //   this.setState({
  //     displayRestaurants: arr
  //   })
  // }

  render() {
    return (
      <div>
        <SearchBar  filterRestaurants={this.filterRestaurants} sortRestaurants={this.sortRestaurants} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
        {this.state.restaurants ? <RestaurantsList restaurantData={this.state.restaurants} searchTerm={this.state.searchTerm}/> : <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" /> }
      </div>
    )
  }
}

export default RestaurantsContainer
