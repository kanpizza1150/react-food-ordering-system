import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import {CardWrapper} from './styledComponents'
export class HomePage extends Component {
  componentDidMount() {
    this.props.getRestaurantList()
  }
  _renderList = (lists) => {
    const result = lists.map((list) => {
      return (
        <CardWrapper key={list.id}>
          <img src={list.image_url} alt="" />
          <div>{list.name}</div>
          <div>{list.kind}</div>
        </CardWrapper>
      )
    })
    return result
  }

  _checkHasRestaurant = (lists) => {
    lists.sort((a, b) => (a.id > b.id ? 1 : -1))
    let result
    if (lists.length > 0) {
      result = this._renderList(lists)
    } else {
      result = <div>an</div>
    }
    return result
  }

  render() {
    const {restaurantList} = this.props
    return restaurantList.loading ? (
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    ) : (
      this._checkHasRestaurant(restaurantList.list.restaurants)
    )
  }
}

export default HomePage
