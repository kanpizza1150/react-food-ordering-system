import {RESTAURANT_URL} from '../../../utils/apis'
import axios from 'axios'

export const getRestaurantListRequst = () => (dispatch) => {
  dispatch({type: 'GET_RESTAURANT_LIST'})
  const config = {
    method: 'GET',
  }

  axios(RESTAURANT_URL, config)
    .then((response) => {
      console.log('response', response)
      dispatch(getRestaurantListSuccess(response.data))
    })
    .catch((e) => console.log('e', e))
}

export const getRestaurantListSuccess = (payload) => (dispatch) => {
  dispatch({
    type: 'GET_RESTAURANT_LIST_SUCCESS',
    payload,
  })
}
export const getRestaurantListFail = (payload) => (dispatch) => {
  dispatch({
    type: 'GET_RESTAURANT_LIST_FAIL',
    payload,
  })
}
