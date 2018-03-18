import React, { Component } from 'react'

import {
  NewTimerContainer,
  Heading,
  BackTo,
  BackToContainer,
  SubHeading,
  SettingsContainer,
} from './styled-components'
import TimerSettings from '../TimerSettings'

import { IconContainer, BackIcon } from '../Icons'
class NewTimer extends Component {
  render() {
    const { goBack } = this.props
    let goBackButton
    if (goBack) {
      goBackButton = (
        <BackToContainer>
          <BackTo onClick={goBack}>
            <span>Back</span>
            <IconContainer>
              <BackIcon />
            </IconContainer>
          </BackTo>
        </BackToContainer>
      )
    }
    return (
      <NewTimerContainer>
        <Heading>devdays.io</Heading>
        {goBack && goBackButton}
        <SubHeading>New Timer</SubHeading>
        <SettingsContainer>
          <TimerSettings {...this.props} />
        </SettingsContainer>
      </NewTimerContainer>
    )
  }
}

export default NewTimer
