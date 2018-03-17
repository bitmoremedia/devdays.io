import moment from 'moment'

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const isValidDateString = ({ dateString }) => {
  // FALSE: if value is not a string
  if (typeof dateString !== 'string') return false
  // FALSE: if there are not three date parts split by "-"
  const dateParts = dateString.split('-')
  if (dateParts.length !== 3) return false
  // FALSE: if any of the date parts are blank
  if (!dateParts[0] || !dateParts[1] || !dateParts[2]) {
    return false
  }
  // FALSE: if any of the date parts are not numbers
  if (isNaN(dateParts[0]) || isNaN(dateParts[1]) || isNaN(dateParts[2])) {
    return false
  }
  // FALSE: if part lengths are not as expected
  if (dateParts[0].length !== 4 || dateParts[1].length !== 2 || dateParts[2].length !== 2) {
    return false
  }
  // FINALLY: we do a moment JS validation check
  return moment(dateString).isValid()
}

export const getLocaleDateFormat = () => {
  // slightly hacky... we want to show either DD/MM/YYYY or MM/DD/YYYY
  let dateDisplayFormat = 'MM/DD/YYYY'
  try {
    const localDateString = new Date('1980-03-26').toLocaleDateString()
    const dateParts = localDateString.split('/')
    if (dateParts[0] === '26') {
      dateDisplayFormat = 'DD/MM/YYYY'
    }
  } catch (e) {}
  return dateDisplayFormat
}
