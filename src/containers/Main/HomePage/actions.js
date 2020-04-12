import {RESTAURANT_URL} from '../../../utils/apis'
import axios from 'axios'

export const getRestaurantListRequst = () => async (dispatch) => {
  dispatch({type: 'GET_RESTAURANT_LIST'})
  try {
    const response = await axios.get(RESTAURANT_URL)
    dispatch(getRestaurantListSuccess(response.data))
  } catch (e) {
    console.log(e)
  }
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
