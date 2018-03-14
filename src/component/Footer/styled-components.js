import styled, { keyframes } from 'styled-components'

import {
  primary,
  subtextOnPrimary,
} from '../../module/colors'


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