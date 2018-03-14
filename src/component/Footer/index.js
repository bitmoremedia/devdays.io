import React, { Component, } from 'react'
import moment from 'moment'

import {
  IconContainer,
  InfoIcon,
} from '../Icons'
import {
  FooterContainer,
  FooterDateContainer,
} from './styled-components'

// const CHECK_TIMER_INTERVAL = 1000
// const MOMENT_DATE_FORMAT = 'dddd, MMMM Do YYYY'

class Footer extends Component {

  render() {

    const today = moment().format('ddd Do MMMM YYYY')

    const showInfo = () => {
      console.log('show info')
    }

    return (
        <FooterContainer>
          <FooterDateContainer>{today}</FooterDateContainer>          
          <IconContainer onClick={showInfo} smaller>
            <InfoIcon />
          </IconContainer>
        </FooterContainer>
    )
  }
}

export default Footer


/*
          <div>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{' '}
            is licensed by{' '}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
*/