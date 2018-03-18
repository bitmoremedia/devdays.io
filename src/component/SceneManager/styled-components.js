import styled, { keyframes } from 'styled-components'
import { zoomIn, slideInRight, slideInLeft } from 'react-animations'

import { appBackground } from '../../module/colors'

const animateEntry = keyframes`${zoomIn}`
const animateForward = keyframes`${slideInRight}`
const animateBackward = keyframes`${slideInLeft}`

export const SceneContainer = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
`

function getZIndex({ scene, inView, transitioning }) {
  let zIndex = 10
  if (!transitioning && inView === scene) {
    zIndex = 20
  } else if (transitioning && inView !== scene) {
    zIndex = 20
  }
  return zIndex
}

function getAnimation({ scene, inView, transitioning, transition, transitionTime }) {
  let animation = ''
  if (transition === 'entry') {
    // animate current scene on entry
    if (inView === scene) {
      animation = animateEntry
    }
  } else if (transitioning) {
    // animate in new scene based on direction
    if (inView !== scene) {
      // animate the not currently in view scene
      if (transition === 'forward') {
        animation = animateForward
      } else if (transition === 'back') {
        animation = animateBackward
      }
    }
  }
  if (animation) {
    return `${transitionTime} ${animation}`
  }
  return ''
}

const sceneProps = `
  display: inline-block;
  white-space: normal;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${appBackground};
`

export const SceneA = styled.div`
  ${sceneProps};
  z-index: ${props => getZIndex({ ...props, scene: 'A' })};
  animation: ${props => getAnimation({ ...props, scene: 'A' })};
`

export const SceneB = styled.div`
  ${sceneProps};
  z-index: ${props => getZIndex({ ...props, scene: 'B' })};
  animation: ${props => getAnimation({ ...props, scene: 'B' })};
`

/*

//   z-index: ${props => (props.inView === 'A' ? '20' : '10')};

  animation: ${props =>
    props.transitioning && props.transition === 'forward'
      ? `${props.transitionTime} ${animateForward}`
      : ''};
  background: red;

  animation: ${props =>
    props.transitioning && props.transition === 'forward'
      ? `${props.transitionTime} ${animateForward}`
      : ''};
  background: green;


*/

/*

  position: ${props => (props.transitioning ? 'absolute' : 'inherit')};

   transition: visibility 0.8s linear;
  visibility: ${props => (props.transitioning ? 'visible' : 'hidden')}; 
 */

/*

  transition: ${props => {
    if (props.transition === 'entry') {
      return 'inherit'
    } else {
      return '0.8s ease-in-out'
    }
  }};
  transform: ${props => {
    if (props.transition === 'entry') {
      return 'translateX(-100vw)'
    } else if (props.transition === 'back') {
      return 'translateX(0)'
    } else if (props.transition === 'forward') {
      return 'translateX(-200vw)'
    }
  }};

*/

/*
// TODO: animate entry?
export const CentreScene = styled.div`
  ${sceneProps}
  transform: ${props => {
    if (props.transition === 'entry') {
      return 'translateX(-100vw)'
    } else if (props.transition === 'back') {
      return 'translateX(0)'
    } else if (props.transition === 'forward') {
      return 'translateX(-200vw)'
    }
  }};
`

export const LeftScene = styled.div`
  ${sceneProps}
  transition: ${props => {
    if (props.transition === 'entry') {
      return 'inherit'
    } else {
      return '0.8s ease-in-out'
    }
  }};
  transform: ${props => {
    if (props.transition === 'entry') {
      return 'translateX(-100vw)'
    } else if (props.transition === 'back') {
      return 'translateX(0)'
    } else if (props.transition === 'forward') {
      return 'translateX(-200vw)'
    }
  }};
`

export const RightScene = styled.div`
  ${sceneProps}
  transition: ${props => {
    if (props.transition === 'entry') {
      return 'inherit'
    } else {
      return '0.8s ease-in-out'
    }
  }};
  transform: ${props => {
    if (props.transition === 'entry') {
      return 'translateX(-100vw)'
    } else if (props.transition === 'back') {
      return 'translateX(0)'
    } else if (props.transition === 'forward') {
      return 'translateX(-200vw)'
    }
  }};
`
*/
