import What from '../components/What'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = ({ wordpress }) => {
  // Do stuff with data then return only what you need
  console.log('wordpress', wordpress)
  return {
    posts: wordpress.posts
    // loading: state.wordpress.isLoading,
  }
}

// Alternative method just grab what state you need and return it.
// const mapStateToProps = ({ account }) => ({
//   signupResponse: errorParse(account.signupError),
// });

const mapDispatchToProps = dispatch => ({
  // onSubmit: bindActionCreators(actions.account.signup, dispatch),
  loadPages: bindActionCreators(actions.wordpress.getAllPages, dispatch),
  loadPosts: bindActionCreators(actions.wordpress.getAllPosts, dispatch)
  // loadPosts: actions.wordpress.getAllPosts
})

const WordpressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(What)

export default WordpressContainer
