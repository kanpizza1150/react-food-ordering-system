import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import App from '.'
const AppConnector = (props) => {
  return <App isLogedIn={props.AppReducer.isLogedIn} />
}
const mapDispatchToProps = (dispatch) => ({
  //   logout: (user) => dispatch(logout(user)),
  //   getTenantProfile: () => dispatch(getTenantProfile()),
  //   submitRegister: (user) => dispatch(submitRegister(user)),
})
const mapStateToProps = (state) => {
  return {
    ...state,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppConnector)

// AppConnector.propTypes = {
//   appReducer: PropTypes.object,
//   logout: PropTypes.func,
//   getTenantProfile: PropTypes.func,
//   submitRegister: PropTypes.func,
// }
