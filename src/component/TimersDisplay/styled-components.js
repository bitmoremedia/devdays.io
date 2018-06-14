import styled from 'styled-components'

import { primary, textOnPrimary, subtextOnPrimary, secondary } from '../../module/colors'

const maxContentWidth = '1200px'

export const OutOfTimeContainer = styled.div`
  color: ${textOnPrimary};
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TimersDisplayContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  text-align: center;
  background: ${secondary};
`

export const HeaderContainer = styled.div`
  background-color: ${primary};
  display: flex;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: ${maxContentWidth};
  flex-direction: row;
  padding: 10px;
  @media (min-width: 700px) {
    padding: 20px;
    flex-direction: row;
  }
`

export const TitleContainer = styled.div`
  min-height: 90px;
  @media (min-width: 700px) {
    min-height: 140px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  font-size: 2em;
  @media (min-width: 700px) {
    font-size: 3em;
  }
  color: ${textOnPrimary};
  text-transform: uppercase;
`

export const Date = styled.h2`
  font-size: 1em;
  @media (min-width: 700px) {
    font-size: 1.3em;
  }
  color: ${subtextOnPrimary};
  padding-top: 10px;
`

export const TimePanelsContainerStretch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`

export const TimePanelsContainerOuter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TimePanelsContainerInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  height: 100%;
`

export const TimePanelContainer = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 700px) {
    width: inherit;
  }
`
