import styled from 'styled-components'

import { primary, textOnPrimary, subtextOnPrimary } from '../../module/colors'

export const Container = styled.div`
  position: relative;
  height: 160px;
  width: 160px;
  @media (min-width: 700px) {
    height: 180px;
    width: 180px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 180px;
  background: ${({ standout }) => {
    if (standout) {
      return primary
    } else {
      return '#e6e6e5'
    }
  }};
  color: ${({ standout }) => {
    if (standout) {
      return textOnPrimary
    } else {
      return 'inherit'
    }
  }};
`

export const Value = styled.h1`
  font-size: 2em;
  @media (min-width: 700px) {
    font-size: 2.5em;
  }
  padding-bottom: 10px;
`

export const Label = styled.h1`
  font-size: 1.6em;
  @media (min-width: 700px) {
    font-size: 2em;
  }
  padding-top: 10px;
`

export const Integer = styled.span`
  font-size: 1em;
`

export const Decimal = styled.span`
  font-size: 0.5em;
`

export const DecimalPoint = styled.span`
  font-size: 0.5em;
`

export const SubLabelContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`

export const SubLabel = styled.span`
  color: ${subtextOnPrimary};
  font-style: italic;
  opacity: 0.5;
`
