import moment from 'moment'

export const getTimesUntil = ({ currentDateTime, endDate, devDayPattern, numDevelopers }) => {
  const thisDateTime = currentDateTime || new Date().getTime()
  const currentMoment = moment(thisDateTime)
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0)
  const currentDayIndex = currentMoment.day()

  const timerMoment = moment(endDate)
  const devDayIndexes = getDayPatternToDayIndexes({ devDayPattern })

  const times = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    devDays: 0,
    hours: 0,
    minutes: 0,
  }

  times.years = timerMoment.diff(currentMoment, 'years', true)
  times.months = timerMoment.diff(currentMoment, 'months', true)
  times.weeks = timerMoment.diff(currentMoment, 'weeks', true)
  times.days = timerMoment.diff(currentMoment, 'days', true)

  let devDayCounter = 0
  let devDayCounterIndex = currentDayIndex

  // loop through our traditional calendar days and decide which ones to keep
  while (devDayCounter < times.days) {
    if (devDayIndexes.indexOf(devDayCounterIndex) > -1) {
      times.devDays += 1
    }
    devDayCounterIndex = devDayCounterIndex === 6 ? 0 : devDayCounterIndex + 1
    devDayCounter += 1
  }

  return times
}

export const getDayPatternToDayIndexes = ({ devDayPattern }) => {
  const dayParts = devDayPattern.split('-')
  const startDay = dayParts[0]
  const endDay = dayParts[1]
  const dayIndexes = []
  const dayToIndexMap = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 0,
  }
  const startDayIndex = dayToIndexMap[startDay]
  const endDayIndex = dayToIndexMap[endDay]

  if (typeof startDayIndex === 'undefined' || typeof endDayIndex === 'undefined') {
    return undefined
  }

  if (startDayIndex > endDayIndex && endDayIndex !== 0) {
    return undefined
  }

  if (startDayIndex === 0 && endDayIndex !== 0) {
    return undefined
  }

  let addNext = true
  let thisIndex = dayToIndexMap[startDay]
  let endIndex = endDayIndex ? endDayIndex : 6
  while (addNext) {
    // if start day is a sunday then we stop at first iteration
    if (startDayIndex === 0) {
      dayIndexes.push(0)
      addNext = false
    } else {
      if (endDayIndex === 0 && dayIndexes.indexOf(0) === -1) {
        dayIndexes.push(0)
      }
      if (thisIndex <= endIndex) {
        dayIndexes.push(thisIndex)
      } else {
        addNext = false
      }
      thisIndex += 1
    }
  }
  return dayIndexes
}
