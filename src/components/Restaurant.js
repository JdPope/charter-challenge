import React from 'react'

const Restaurant = (props) => {
  return (
    <tr>
      <td>{props.restaurant.name}</td>
      <td>{props.restaurant.city}, {props.restaurant.state}</td>
      <td>{props.restaurant.telephone}</td>
      <td>{props.restaurant.genre.split(',').join(', ')}</td>
    </tr>
  )
}

export default Restaurant
