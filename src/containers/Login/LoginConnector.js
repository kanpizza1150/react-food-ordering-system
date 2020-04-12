import React from 'react'
import {connect} from 'react-redux'
import LoginPage from './index'
import {LoginRequest} from './actions'

const LoginConnector = (props) => {
  const {isLogedIn, LoginRequest} = props
  return <LoginPage isLogedIn={isLogedIn} login={LoginRequest} />
}

const mapStateToProps = (state) => ({
  ...state.LoginReducer,
})

const mapDispatchToProps = (dispatch) => ({
  LoginRequest: (email, password) => dispatch(LoginRequest(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginConnector)
