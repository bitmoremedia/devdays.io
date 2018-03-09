import React, { Component, Fragment } from 'react'
import moment from 'moment'

import { getTimesUntil } from '../../module/timerCalcs'
import TimePanel from '../TimePanel'
import {
  Container,
  HeaderContainer,
  Header,
  HeaderIconContainer,
  HomeIcon,
  SettingsIcon,
  TitleContainer,
  Title,
  Date,
  TimePanelsContainerStretch,
  TimePanelsContainerOuter,
  TimePanelsContainerInner,
  FooterContainer,
  FooterDateContainer,
} from './styled-components'

const CHECK_TIMER_INTERVAL = 1000
const MOMENT_DATE_FORMAT = 'dddd, MMMM Do YYYY'

class TimersDisplay extends Component {
  state = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    devDays: 0,
    hours: 0,
    minutes: 0,
  }

  timer = undefined

  calculateTimers = props => {
    const currentProps = props || { ...this.props }
    this.setState(getTimesUntil({ ...currentProps }))
  }

  applyTimerProps(props) {
    this.calculateTimers(props)
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.calculateTimers()
    }, CHECK_TIMER_INTERVAL)
  }

  componentDidMount() {
    this.applyTimerProps({ ...this.props })
  }

  componentWillReceiveProps(nextProps) {
    this.applyTimerProps({ ...nextProps })
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  renderTimePanels = () => {
    const { devDayPattern } = this.props
    const { years, months, weeks, days, devDays } = this.state
    return (
      <Fragment>
        <TimePanel label="Dev Days" value={devDays} info={devDayPattern} standout />
        <TimePanel label="Days" value={days} />
        {weeks > 1 && <TimePanel label="Weeks" value={weeks} />}
        {months > 1 && <TimePanel label="Months" value={months} />}
        {years > 1 && <TimePanel label="Years" value={years} />}
      </Fragment>
    )
  }

  renderTimesUp = () => {
    return <div>Out of time!!!</div>
  }

  render() {
    const { timerName, endDate, toggleSettings, goToAddTimer } = this.props
    const { days } = this.state

    const dateDisplay = moment(endDate).format(MOMENT_DATE_FORMAT)

    const today = moment().format('ddd Do MMMM YYYY')

    return (
      <Container>
        <HeaderContainer>
          <Header>
            <HeaderIconContainer onClick={goToAddTimer}>
              <HomeIcon />
            </HeaderIconContainer>
            <TitleContainer>
              <Title>{timerName}</Title>
              <Date>{dateDisplay}</Date>
            </TitleContainer>
            <HeaderIconContainer onClick={toggleSettings}>
              <SettingsIcon />
            </HeaderIconContainer>
          </Header>
        </HeaderContainer>
        <TimePanelsContainerStretch>
          <TimePanelsContainerOuter>
            <TimePanelsContainerInner>
              {days < 1 && this.renderTimesUp()}
              {days >= 1 && this.renderTimePanels()}
            </TimePanelsContainerInner>
          </TimePanelsContainerOuter>
        </TimePanelsContainerStretch>
        <FooterContainer>
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
          <FooterDateContainer>{today}</FooterDateContainer>
        </FooterContainer>
      </Container>
    )
  }
}

export default TimersDisplay
