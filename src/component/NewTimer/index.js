import React, { Component } from 'react'

import { NewTimerContainer, Heading, SubHeading, SettingsContainer } from './styled-components'
import TimerSettings from '../TimerSettings'
class NewTimer extends Component {
  render() {
    return (
      <NewTimerContainer>
        <Heading>devdays.io</Heading>
        <SubHeading>New Timer</SubHeading>
        <SettingsContainer>
          <TimerSettings {...this.props} />
        </SettingsContainer>
      </NewTimerContainer>
    )
  }
}

export default NewTimer
