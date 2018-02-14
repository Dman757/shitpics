import What from '../components/What'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  //Do stuff with data then return only what you need
  return {
    // loading: state.wordpress.isLoading,
  }
}

// Alternative method just grab what state you need and return it.
// const mapStateToProps = ({ account }) => ({
//   signupResponse: errorParse(account.signupError),
// });

const mapDispatchToProps = dispatch => ({
  // onSubmit: bindActionCreators(actions.account.signup, dispatch),
  loadPages: bindActionCreators(actions.wordpress.getAllPages, dispatch)
})

const WordpressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(What)

export default WordpressContainer
