import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
//  Redux Actions
// import { editConfig } from '../../../ducks/config'

@connect(
  state => ({
    config: state.config
  })
  // dispatch => ({ actions: bindActionCreators({ editConfig }, dispatch) })
)
class Output extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  }
  static defaultProps = {
    config: {}
  }
  render ({ config } = this.props) {
    return (
      <section>
        Placeholder for output inspector
      </section>
    )
  }
}
export default Output
