import styled from 'styled-components'

import { textOnPrimary, subtextOnPrimary, subtextOnPrimaryAlt } from '../../module/colors'

export const NewTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  padding: 40px 10px 40px 10px;
  text-align: center;
  color: ${textOnPrimary};
  font-size: 3em;
`

export const BackToContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 26px;
  @media (min-width: 700px) {
    position: absolute;
    top: 22px;
    right: 20px;
  }
`

export const BackTo = styled.div`
  width: 80px;
  text-align: center;
  color: ${subtextOnPrimaryAlt};
  font-size: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    color: ${subtextOnPrimary};
    svg {
      fill: ${subtextOnPrimary};
    }
  }
`

export const SubHeading = styled.h2`
  text-align: center;
  color: ${subtextOnPrimary};
  font-size: 2em;
  padding-bottom: 40px;
`

export const SettingsContainer = styled.div`
  margin: auto;
`
