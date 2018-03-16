import styled, { keyframes } from 'styled-components'
import {
  fadeOutDownBig,
  fadeInUp,
  fadeInDown,
  flipInX,
  lightSpeedIn,
  rubberBand,
  tada,
  bounceInLeft,
  zoomInUp,
  rollIn,
  rotateInDownRight,
} from 'react-animations'

const animationInList = [
  keyframes`${rotateInDownRight}`,
  keyframes`${rollIn}`,
  keyframes`${zoomInUp}`,
  keyframes`${lightSpeedIn}`,
  keyframes`${fadeInUp}`,
  keyframes`${fadeInDown}`,
  keyframes`${flipInX}`,
  keyframes`${bounceInLeft}`,
  keyframes`${rubberBand}`,
  keyframes`${tada}`,
  keyframes`${flipInX}`,
]
const animateOut = keyframes`${fadeOutDownBig}`

const randomAnimation = () => {
  return animationInList[Math.floor(Math.random() * animationInList.length)]
}

export const TimerDashboardContainer = styled.div``

export const TimerSettingsContainerOuter = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  transition: visibility 0.2s linear;
  visibility: ${props => (props.displaySettings ? `visible` : `hidden`)};
  background: #00000036;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const TimerSettingsContainerInner = styled.div`
  transition: visibility 0.8s linear;
  visibility: ${props => (props.displaySettings ? `visible` : `hidden`)};
  animation: ${props =>
    props.displaySettings ? `0.8s ${randomAnimation()}` : `0.8s ${animateOut}`};
`
