import { getTimesUntil, getDayPatternToDayIndexes, getEndDateFromDevDays } from './timerCalcs'

describe('getTimesUntil: 2018-03-05 to 2018-03-08 (mon-sun)', () => {
  const output = getTimesUntil({
    currentDateTime: new Date('2018-03-05').getTime(),
    endDate: '2018-03-08',
    devDayPattern: 'mon-sun',
  })

  test('days to be 3', () => {
    expect(output.days).toEqual(3)
  })

  test('dev days to be 3', () => {
    expect(output.devDays).toEqual(3)
  })
})

describe('getTimesUntil: 2018-03-05 to 2018-03-08 (mon-tue)', () => {
  const output = getTimesUntil({
    currentDateTime: new Date('2018-03-05').getTime(),
    endDate: '2018-03-08',
    devDayPattern: 'mon-tue',
  })

  test('days to be 3', () => {
    expect(output.days).toEqual(3)
  })

  test('dev days to be 2', () => {
    expect(output.devDays).toEqual(2)
  })
})

describe('getTimesUntil: 2018-03-05 to 2018-03-15 (mon-fri)', () => {
  const output = getTimesUntil({
    currentDateTime: new Date('2018-03-05').getTime(),
    endDate: '2018-03-15',
    devDayPattern: 'mon-fri',
  })

  test('days to be 10', () => {
    expect(output.days).toEqual(10)
  })

  test('dev days to be 8', () => {
    expect(output.devDays).toEqual(8)
  })
})

describe('dayPatternToDayIndexes', () => {
  test('mon-fri', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'mon-fri',
      }),
    ).toEqual([1, 2, 3, 4, 5])
  })

  test('sun-sun', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'sun-sun',
      }),
    ).toEqual([0])
  })

  test('mon-sun', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'mon-sun',
      }),
    ).toEqual([0, 1, 2, 3, 4, 5, 6])
  })

  test('tue-sat', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'tue-sat',
      }),
    ).toEqual([2, 3, 4, 5, 6])
  })

  test('invalid-param', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'invalid-param',
      }),
    ).toEqual(undefined)
  })

  test('thu-mon', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'thu-mon',
      }),
    ).toEqual(undefined)
  })

  test('sun-sat', () => {
    expect(
      getDayPatternToDayIndexes({
        devDayPattern: 'sun-sat',
      }),
    ).toEqual(undefined)
  })
})

describe('getEndDateFromDevDays: 2018-03-05 with devDays 3 (mon-sun)', () => {  
  const endDate = getEndDateFromDevDays({
    currentDateTime: new Date('2018-03-05').getTime(),
    devDays: 3,
    devDayPattern: 'mon-sun',
  })
  test('go live to be 2018-03-08', () => {
    expect(endDate).toEqual('2018-03-08')
  })
})

describe('getEndDateFromDevDays: 2018-03-05 with devDays 3 (mon-tue)', () => {
  const endDate = getEndDateFromDevDays({
    currentDateTime: new Date('2018-03-05').getTime(),
    devDays: 3,
    devDayPattern: 'mon-tue',
  })
  test('go live to be 2018-03-13', () => {
    expect(endDate).toEqual('2018-03-13')
  })
})

describe('getEndDateFromDevDays: 2018-03-05 with devDays 8 (mon-fri)', () => {
  const endDate = getEndDateFromDevDays({
    currentDateTime: new Date('2018-03-05').getTime(),
    devDays: 8,
    devDayPattern: 'mon-fri',
  })
  test('go live to be 2018-03-15', () => {
    expect(endDate).toEqual('2018-03-15')
  })
})