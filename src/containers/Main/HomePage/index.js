import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import {CardWrapper, HeaderWrapper} from './styledComponents'
import Typewriter from 'typewriter-effect'

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
      result = <>{this._renderList(lists)}</>
    } else {
      result = <div>an</div>
    }
    return result
  }

  render() {
    const {restaurantList} = this.props

    return (
      <>
        <HeaderWrapper>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(25)
                .typeString('Hi! Are you hungry?')
                .pauseFor(1500)
                .typeString('<br/>Finding something to eat?')
                .pauseFor(500)
                .typeString(`<br/><button>explore</button>`)
                .start()
            }}
          />
        </HeaderWrapper>
        {!restaurantList.loading &&
          this._checkHasRestaurant(restaurantList.list.restaurants)}
      </>
    )
  }
}

export default HomePage
