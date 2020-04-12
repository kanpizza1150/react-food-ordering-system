import {produce} from 'immer'
const initialState = {
  restaurantList: {loading: true, list: []},
}
const HomeReducer = (state = initialState, action) => {
  const result = produce(state, (draft) => {
    switch (action.type) {
      case 'GET_RESTAURANT_LIST':
        draft.restaurantList.loading = true
        draft.restaurantList.list = []
        break
      case 'GET_RESTAURANT_LIST_SUCCESS':
        draft.restaurantList.loading = false
        draft.restaurantList.list = action.payload
        break
      case 'GET_RESTAURANT_LIST_FAIL':
        draft.restaurantList.loading = false
        draft.restaurantList.list = action.payload
        break

      default:
        return draft
    }
  })
  return result
}

export default HomeReducer
