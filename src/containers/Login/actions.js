export const LoginRequest = (email, password) => async (dispatch) => {
  dispatch({
    type: 'LOGIN_REQUST',
  })
  try {
    const response = {token: 'abc'}
    dispatch(LoginSuccess(response))
  } catch (e) {
    if (!e.response) {
      dispatch(LoginFail())
    } else {
      console.log(e)
    }
  }
}

export const LoginSuccess = (payload) => (dispatch) => {
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload,
  })
}

export const LoginFail = (payload) => (dispatch) => {
  dispatch({
    type: 'LOGIN_FAIL',
    payload,
  })
}
