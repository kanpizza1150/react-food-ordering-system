import React from 'react'
import {connect} from 'react-redux'
import HomePage from '.'
import {getRestaurantListRequst} from './actions'
const HomeConnector = (props) => {
  return (
    <HomePage
      getRestaurantList={props.getRestaurantList}
      restaurantList={props.restaurantList}
    />
  )
}

const mapStateToProps = (state) => ({
  ...state.HomeReducer,
})

const mapDispatchToProps = (dispatch) => ({
  getRestaurantList: () => dispatch(getRestaurantListRequst()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeConnector)
