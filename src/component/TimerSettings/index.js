import React, { Component } from 'react'

import DatePicker from '../DatePicker'
import {
  TimerSettingsContainer,
  Form,
  FormItem,
  FormItemLabel,
  FormInput,
  FormRadio,
  FormSelect,
  RadioOptions,
  SubmitButton,
  DayInput,
} from './styled-components'
import { getDayPatternToDayIndexes, getTimesUntil, getEndDateFromDevDays, } from '../../module/timerCalcs'
import { isValidDateString } from '../../module/utils'

class TimerSettings extends Component {
  state = {
    timerName: '',
    endDate: '',
    devDays: '',
    devDayType: 'type-date',
    devDayPatternStart: 'mon',
    devDayPatternEnd: 'fri',
    formValid: false,
    endDateFocused: false,
  }

  applyTimerProps = ({ timerName, endDate, devDayPattern }) => {
    let devDayPatternStart = 'mon'
    let devDayPatternEnd = 'fri'
    if (devDayPattern) {
      devDayPatternStart = devDayPattern.split('-')[0]
      devDayPatternEnd = devDayPattern.split('-')[1]
    }
    this.setState(
      {
        timerName: timerName || '',
        endDate: endDate || '',
        devDayPatternStart,
        devDayPatternEnd,
      },
      this.validateForm,
    )
  }

  componentDidMount() {
    this.applyTimerProps({ ...this.props })
  }

  validateForm = () => {
    let formValid = true
    const { timerName, endDate, devDays, devDayType, devDayPatternStart, devDayPatternEnd } = this.state
    const devDayPattern = `${devDayPatternStart}-${devDayPatternEnd}`
    // ensure we have name and date values
    if (!timerName || !endDate) {
      formValid = false
    }
    // ensure the date value is a valid date
    if (formValid && !isValidDateString({ dateString: endDate })) {
      formValid = false
    }
    // ensure the devDayPattern is valid
    if (formValid) {      
      const indexes = getDayPatternToDayIndexes({ devDayPattern })
      if (!indexes) {
        formValid = false
      }
    }
    // update the date / dev days field based on which type has been set
    let newEndDate = endDate
    let newDevDays = devDays
    if (formValid) {
      if (devDayType === 'type-date'){
        if (endDate){
          newDevDays = getTimesUntil({ endDate, devDayPattern }).devDays
        }
      } else if (devDayType === 'type-days') {
        if (devDays){
          newEndDate = getEndDateFromDevDays({ devDays, devDayPattern })
        }
      }
    }
    this.setState({ 
      endDate: newEndDate,
      devDays: newDevDays,
      formValid
     })
  }

  onEndDateChange = endDate => {
    this.setState(
      {
        endDate: endDate,
      },
      this.validateForm,
    )
  }

  onEndDateFocusChange = ({ focused }) => {
    this.setState(
      {
        endDateFocused: focused,
      },
      this.validateForm,
    )
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.validateForm,
    )
  }

  handleTypeChange = e => {
    this.setState(
      {
        devDayType: e.target.value,
      },
      this.validateForm,
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const { timerName, endDate, devDayPatternStart, devDayPatternEnd, formValid } = this.state
    if (formValid) {
      const devDayPattern = `${devDayPatternStart}-${devDayPatternEnd}`
      this.props.goToTimer({ timerName, endDate, devDayPattern })
    }
  }

  render() {
    const { handleChange, onEndDateChange, onEndDateFocusChange, handleTypeChange } = this
    const { mode, alwaysShowSubmitButton } = this.props
    const {
      timerName,
      endDate,
      devDays,
      devDayPatternStart,
      devDayPatternEnd,
      formValid,
      endDateFocused,
      devDayType,
    } = this.state

    const submitBtnText = mode === 'update' ? 'Update' : 'View'

    const typeDate = !!(devDayType === 'type-date')
    const typeDays = !!(devDayType === 'type-days')

    return (
      <TimerSettingsContainer>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <FormItemLabel>Name</FormItemLabel>
            <FormInput name="timerName" onChange={handleChange} value={timerName} />
          </FormItem>

          <FormItem noRightPad>
            
          { devDayType === 'type-date' &&
              <DatePicker
                date={endDate}
                onDateChange={onEndDateChange}
                focused={endDateFocused}
                onFocusChange={onEndDateFocusChange}
              />
            }
            { devDayType === 'type-days' &&
              <DayInput placeholder="Days" type="number" name="devDays" onChange={handleChange} value={devDays} />
            }         
                
            <RadioOptions>
              <FormRadio onChange={handleTypeChange} checked={typeDate} type="radio" name="type-date" value="type-date" label="Go Live" />
              <FormRadio onChange={handleTypeChange} checked={typeDays} type="radio" name="type-days" value="type-days" label="Dev Days" />
            </RadioOptions>
          </FormItem>

          <FormItem>
            <FormItemLabel>Dev Week Start</FormItemLabel>
            <FormSelect
              name="devDayPatternStart"
              value={devDayPatternStart}
              onChange={handleChange}
            >
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </FormSelect>
          </FormItem>

          <FormItem>
            <FormItemLabel>Dev Week End</FormItemLabel>
            <FormSelect name="devDayPatternEnd" value={devDayPatternEnd} onChange={handleChange}>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </FormSelect>
          </FormItem>

          {(formValid || alwaysShowSubmitButton) && (
            <FormItem>
              <SubmitButton type="submit" disabled={!formValid}>
                {submitBtnText} Timer
              </SubmitButton>
            </FormItem>
          )}
        </Form>
      </TimerSettingsContainer>
    )
  }
}

export default TimerSettings
