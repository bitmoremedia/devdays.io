import React, { Component } from 'react'

import { IconContainer, InfoIcon } from '../Icons'
import {
  FooterContainer,
  FooterDateContainer,
  LiveDot,
  Now,
  InfoContainer,
  InfoDetails,
  InfoItem,
} from './styled-components'

const Info = () => (
  <InfoDetails>
    <InfoItem>
      Built by <a href="https://bitmoremedia.com">BitMoreMedia</a>
    </InfoItem>
    <InfoItem>
      Hosted on <a href="https://github.com/bitmoremedia/devdays.io">Github</a>
    </InfoItem>
    <InfoItem>
      Icons by{' '}
      <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
        Smashicons
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </InfoItem>
    <InfoItem subtext>
      This page uses no cookies or tracking - but feel free to star the github repo
    </InfoItem>
  </InfoDetails>
)

class Footer extends Component {
  state = {
    infoDisplayed: false,
  }

  toggleInfo = () => {
    this.setState({
      infoDisplayed: !this.state.infoDisplayed,
    })
  }

  render() {
    const { now } = this.props
    const { infoDisplayed } = this.state
    const { toggleInfo } = this

    return (
      <FooterContainer>
        <FooterDateContainer>
          <LiveDot />
          <Now>{now}</Now>
        </FooterDateContainer>
        <IconContainer onClick={toggleInfo} smaller>
          <InfoIcon />
        </IconContainer>
        <InfoContainer infoDisplayed={infoDisplayed}>
          <Info />
        </InfoContainer>
      </FooterContainer>
    )
  }
}

export default Footer
