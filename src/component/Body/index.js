import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import withSideEffect from 'react-side-effect'

class Body extends Component {
  render() {
    return Children.only(this.props.children)
  }
}

Body.propTypes = {
  style: PropTypes.object.isRequired,
}

function reducePropsToState(propsList) {
  let style = {
    overflow: 'inherit',
    position: 'inherit',
  }
  propsList.forEach(function(props) {
    style = {
      ...style,
      ...props.style,
    }
  })
  return style
}

function handleStateChangeOnClient(style) {
  Object.assign(document.body.style, style)
}

export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(Body)
