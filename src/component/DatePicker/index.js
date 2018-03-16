import React, { Component } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class DatePicker extends Component {
  state = {
    dateMoment: this.props.date ? moment(this.props.date) : null,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dateMoment: nextProps.date ? moment(nextProps.date) : null,
    })
  }

  onDateChange = dateMoment => {
    this.setState({
      dateMoment,
    })
    if (dateMoment) {
      this.props.onDateChange(dateMoment.format('YYYY-MM-DD'))
    }
  }

  render() {
    const { onDateChange } = this
    const { dateMoment } = this.state
    const { focused, onFocusChange } = this.props

    // bit of a hack
    // make the input read only on small/mobile/touch devices
    let readOnly = false
    const isMobileDeviceWidth = window.matchMedia && window.matchMedia('(max-width: 700px)').matches
    if (isMobileDeviceWidth) {
      readOnly = true
    }

    return (
      <SingleDatePicker
        date={dateMoment}
        onDateChange={onDateChange}
        focused={focused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        readOnly={readOnly}
      />
    )
  }
}

export default DatePicker
