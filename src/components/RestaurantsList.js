import React from 'react'
import Restaurant from './Restaurant'

const RestaurantList = (props) => {

  const getDisplayedRestaurants = () => {
    return props.restaurantData
        .filter(restaurant => {
            if (!props.searchTerm){
                return true
            } else {
                return restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase())
                || restaurant.city.toLowerCase().includes(props.searchTerm.toLowerCase())
            }
        })
  }
  
  const sortRestaurants = getDisplayedRestaurants().map(restaurant => {
    let sortedRestaurants = []
  })

  const displayedRestaurants = getDisplayedRestaurants().map(restaurant => {
    return <Restaurant restaurant={restaurant} />
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Name
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              City & State
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Phone Number
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Genres
            </h3>
          </th>
        </tr>

        {displayedRestaurants}

      </tbody>
    </table>
  )
}

export default RestaurantList
