import styled, { keyframes } from 'styled-components'
import { rollIn } from 'react-animations'

import { textOnPrimary, subtextOnPrimary } from '../../module/colors'

const animateIn = keyframes`${rollIn}`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  padding: 40px 10px 40px 10px;
  text-align: center;
  color: ${textOnPrimary};
  font-size: 3em;
`

export const SubHeading = styled.h2`
  text-align: center;
  color: ${subtextOnPrimary};
  font-size: 2em;
  padding-bottom: 40px;
`

export const SettingsContainer = styled.div`
  margin: auto;
  animation: 0.8s ${animateIn};
`
