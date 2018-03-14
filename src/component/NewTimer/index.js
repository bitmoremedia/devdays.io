import React, { Component } from 'react'

import { Container, Heading, SubHeading, SettingsContainer } from './styled-components'
import TimerSettings from '../TimerSettings'
class NewTimer extends Component {
  render() {
    return (
      <Container>
        <Heading>devdays.io</Heading>
        <SubHeading>add new timer</SubHeading>
        <SettingsContainer>
          <TimerSettings {...this.props} />
        </SettingsContainer>
      </Container>
    )
  }
}

export default NewTimer