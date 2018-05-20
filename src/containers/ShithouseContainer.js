import Shithouse from '../components/Shithouse'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = ({ shithouse }) => {
  return {
    bumps: shithouse.bumps
  }
}

// Alternative method just grab what state you need and return it.
// const mapStateToProps = ({ account }) => ({
//   signupResponse: errorParse(account.signupError),
// });

const mapDispatchToProps = dispatch => ({
  loadShit: bindActionCreators(actions.shithouse.getAll, dispatch),
})

const ShithouseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shithouse)

export default ShithouseContainer
