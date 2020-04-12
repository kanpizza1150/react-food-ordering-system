import {produce} from 'immer'
const initialState = {
  //   loading: true,
  //   sellDetail: {load: true, data: []},
  //   sellTransaction: {load: true, data: []},
  //   sellDailyTransaction: {load: true, data: []},
  //   group: {load: true, list: []},
  //   meterGroup: {load: true, list: [], groupId: ''},
  //   contractList: {load: true, list: []},
  //   period: {load: true, list: []},
  isLogedIn: true,
}
const AppReducer = (state = initialState, action) => {
  const result = produce(state, (draft) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        // draft.group.load = true
        // draft.group.list = []
        // draft.meterGroup.load = true
        // draft.meterGroup.list = []
        // draft.meterGroup.groupId = ''
        break

      default:
        return draft
    }
  })
  return result
}

export default AppReducer
