import { isValidDateString } from './utils'

test('isValidDateString: 2018-03-01', () => {
  expect(
    isValidDateString({
      dateString: '2018-03-01',
    }),
  ).toEqual(true)
})

test('isValidDateString: 2018-03', () => {
  expect(
    isValidDateString({
      dateString: '2018-03',
    }),
  ).toEqual(false)
})

test('isValidDateString: 2018-03-ABC', () => {
  expect(
    isValidDateString({
      dateString: '2018-03-ABC',
    }),
  ).toEqual(false)
})

test('isValidDateString: undefined', () => {
  expect(
    isValidDateString({
      dateString: undefined,
    }),
  ).toEqual(false)
})
