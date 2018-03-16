import styled, { keyframes } from 'styled-components'
import { rotateInUpRight, rotateOutDownRight } from 'react-animations'

import { primary, subtextOnPrimary, textOnPrimary } from '../../module/colors'

const animateIn = keyframes`${rotateInUpRight}`
const animateOut = keyframes`${rotateOutDownRight}`

export const FooterContainer = styled.div`
  position: relative;
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${subtextOnPrimary};
  min-height: 90px;
  font-size: 0.8em;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    min-height: 40px;
  }
`

export const FooterDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const pulsate = keyframes`
  0% {opacity: 0.5}
  50% {opacity: 1}
  100% {opacity: 0.5}
`

export const LiveDot = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: ${subtextOnPrimary};
  display: inline-block;
  margin-right: 10px;
  animation: ${pulsate} 2s linear infinite;
`
export const Now = styled.span`
  padding-top: 2px;
  @media (min-width: 700px) {
    min-height: 0;
  }
`

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 110px;
  right: 15px;
  left: 15px;
  background: ${primary};
  padding: 16px 20px 16px 20px;
  transition: visibility 0.8s linear;
  visibility: ${props => (props.infoDisplayed ? 'visible' : 'hidden')};
  animation: ${props => (props.infoDisplayed ? `0.8s ${animateIn}` : `0.8s ${animateOut}`)};
  a {
    color: ${textOnPrimary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 700px) {
    bottom: 94px;
    left: inherit;
    right: 20px;
  }
`

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const InfoItem = styled.div`
  font-style: ${props => (props.subtext ? 'italic' : 'inherit')};
  padding-top: ${props => (props.subtext ? '12px' : '4px')};
  padding-bottom: 4px;
  line-height: 15px;
`
